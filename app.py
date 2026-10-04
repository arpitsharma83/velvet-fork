from flask import Flask, request, jsonify, send_from_directory
import json
import os
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app)

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
USERS_FILE = os.path.join(DATA_DIR, 'users.json')
RESERVATIONS_FILE = os.path.join(DATA_DIR, 'reservations.json')

# Helper functions
def read_json(file):
    if not os.path.exists(file):
        return []
    with open(file, 'r', encoding='utf-8') as f:
        try:
            return json.load(f)
        except Exception:
            return []

def write_json(file, data):
    with open(file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

# User registration
@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    if not username or not password or not email:
        return jsonify({'error': 'Missing fields'}), 400
    users = read_json(USERS_FILE)
    if any(u['username'] == username for u in users):
        return jsonify({'error': 'User exists'}), 409
    hashed = generate_password_hash(password)
    user = {'username': username, 'email': email, 'password': hashed, 'favorites': []}
    users.append(user)
    write_json(USERS_FILE, users)
    return jsonify({'success': True})

# User login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    users = read_json(USERS_FILE)
    user = next((u for u in users if u['username'] == username), None)
    if not user or not check_password_hash(user['password'], password):
        return jsonify({'error': 'Invalid credentials'}), 401
    return jsonify({'success': True, 'username': user['username'], 'email': user['email']})

# Get user profile (reservations, favorites)
@app.route('/api/user/<username>', methods=['GET'])
def get_user(username):
    users = read_json(USERS_FILE)
    reservations = read_json(RESERVATIONS_FILE)
    user = next((u for u in users if u['username'] == username), None)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    user_reservations = [r for r in reservations if r['username'] == username]
    return jsonify({
        'username': user['username'],
        'email': user['email'],
        'favorites': user.get('favorites', []),
        'reservations': user_reservations
    })
 
# Add reservation (updated to allow anonymous reservations and Formspree integration)
@app.route('/api/reservations', methods=['POST'])
def add_reservation():
    data = request.json
    # Accept anonymous reservations (no username) for Formspree/public form
    required = ['name', 'phone', 'email', 'date', 'time', 'people']
    if not all(data.get(k) for k in required):
        return jsonify({'error': 'Missing fields'}), 400
    reservations = read_json(RESERVATIONS_FILE)
    # Use username if provided, else empty string
    reservation = {
        'id': int(json.dumps(hash(f"{data.get('username','')}{data['name']}{data['date']}{data['time']}") % 100000000)),
        'username': data.get('username', ''),
        'name': data['name'],
        'phone': data['phone'],
        'email': data['email'],
        'date': data['date'],
        'time': data['time'],
        'people': data['people'],
        'requests': data.get('requests', '')
    }
    reservations.append(reservation)
    write_json(RESERVATIONS_FILE, reservations)
    return jsonify({'success': True, 'reservation': reservation})

# Delete reservation
@app.route('/api/reservations/<int:res_id>', methods=['DELETE'])
def delete_reservation(res_id):
    reservations = read_json(RESERVATIONS_FILE)
    idx = next((i for i, r in enumerate(reservations) if r['id'] == res_id), -1)
    if idx == -1:
        return jsonify({'error': 'Reservation not found'}), 404
    reservations.pop(idx)
    write_json(RESERVATIONS_FILE, reservations)
    return jsonify({'success': True})

# Add/remove favorite dish
@app.route('/api/user/<username>/favorites', methods=['POST'])
def update_favorites(username):
    data = request.json
    dish = data.get('dish')
    action = data.get('action')  # 'add' or 'remove'
    users = read_json(USERS_FILE)
    user = next((u for u in users if u['username'] == username), None)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    if action == 'add' and dish and dish not in user['favorites']:
        user['favorites'].append(dish)
    elif action == 'remove' and dish:
        user['favorites'] = [d for d in user['favorites'] if d != dish]
    else:
        return jsonify({'error': 'Invalid action or missing dish'}), 400
    write_json(USERS_FILE, users)
    return jsonify({'success': True, 'favorites': user['favorites']})

# Update user profile (email, password)
@app.route('/api/user/<username>/update', methods=['POST'])
def update_user(username):
    data = request.json
    users = read_json(USERS_FILE)
    user = next((u for u in users if u['username'] == username), None)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    email = data.get('email')
    password = data.get('password')
    if email:
        user['email'] = email
    if password:
        user['password'] = generate_password_hash(password)
    write_json(USERS_FILE, users)
    return jsonify({'success': True})

# Feedback storage (append to feedback.json)
@app.route('/api/feedback', methods=['POST'])
def submit_feedback():
    data = request.json
    username = data.get('username')
    text = data.get('text')
    rating = data.get('rating')
    if not username or not text or not rating:
        return jsonify({'error': 'Missing fields'}), 400
    feedback_file = os.path.join(DATA_DIR, 'feedback.json')
    feedbacks = []
    if os.path.exists(feedback_file):
        feedbacks = read_json(feedback_file)
    feedbacks.append({
        'username': username,
        'text': text,
        'rating': rating,
        'date': str(datetime.date.today())
    })
    write_json(feedback_file, feedbacks)
    return jsonify({'success': True})

# Serve data files (e.g., feedback.json) for frontend access
@app.route('/backend/data/<path:filename>')
def serve_data_file(filename):
    return send_from_directory(os.path.join(app.root_path, 'backend', 'data'), filename)

if __name__ == '__main__':
    os.makedirs(DATA_DIR, exist_ok=True)
    if not os.path.exists(USERS_FILE):
        write_json(USERS_FILE, [])
    if not os.path.exists(RESERVATIONS_FILE):
        write_json(RESERVATIONS_FILE, [])
    app.run(host='0.0.0.0', port=4000, debug=True)
