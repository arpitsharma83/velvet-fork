document.addEventListener('DOMContentLoaded', function() {
    // Animate headline
    const headline = document.getElementById('headline');
    if (headline) {
        headline.style.opacity = 0;
        headline.style.transform = 'translateY(-30px)';
        setTimeout(() => {
            headline.style.transition = 'all 1s cubic-bezier(.68,-0.55,.27,1.55)';
            headline.style.opacity = 1;
            headline.style.transform = 'translateY(0)';
        }, 300);
    }

    // CTA button scroll to reservation page
    const ctaBtn = document.getElementById('cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            window.location.href = 'reservation.html';
        });
        ctaBtn.addEventListener('mouseover', function() {
            ctaBtn.style.background = 'linear-gradient(90deg,#fbc2eb,#a18cd1)';
            ctaBtn.style.transform = 'scale(1.07)';
        });
        ctaBtn.addEventListener('mouseout', function() {
            ctaBtn.style.background = 'linear-gradient(90deg,#a18cd1,#fbc2eb)';
            ctaBtn.style.transform = 'scale(1)';
        });
    }

    // Book a Table button (if using .book-table-btn class)
    const bookTableBtn = document.querySelector('.book-table-btn');
    if (bookTableBtn) {
        bookTableBtn.addEventListener('mouseover', function() {
            bookTableBtn.style.background = 'linear-gradient(90deg,#fbc2eb,#a18cd1)';
            bookTableBtn.style.transform = 'scale(1.07)';
        });
        bookTableBtn.addEventListener('mouseout', function() {
            bookTableBtn.style.background = 'linear-gradient(90deg,#a18cd1,#fbc2eb)';
            bookTableBtn.style.transform = 'scale(1)';
        });
        bookTableBtn.addEventListener('click', function() {
            window.location.href = 'reservation.html';
        });
    }

    // Dish details data
    const dishDetails = {
        'shahi-paneer': {
            title: 'Shahi Paneer',
            ingredients: 'Paneer, cream, tomato, cashew, spices, butter',
            img: 'pics/shahi-paneer.jpg'
        },
        'mix-veg': {
            title: 'Mix Veg',
            ingredients: 'Mixed vegetables, spices, tomato, onion, cream',
            img: 'pics/mixed-veg.jpg'
        },
        'aloo-dum': {
            title: 'Aloo Dum',
            ingredients: 'Potatoes, tomato, onion, yogurt, spices',
            img: 'pics/dum-aloo.jpg'
        },
        'palak-paneer': {
            title: 'Palak Paneer',
            ingredients: 'Paneer, spinach, cream, tomato, spices',
            img: 'pics/palak-paneer.jpg'
        },
        'kadhai-paneer': {
            title: 'Kadhai Paneer',
            ingredients: 'Paneer, capsicum, tomato, onion, spices',
            img: 'pics/kadai-paneer.jpg'
        },
        'chicken-curry': {
            title: 'Chicken Curry',
            ingredients: 'Chicken, onion, tomato, spices',
            img: 'pics/Chicken-Curry.jpg'
        },
        'mutton-korma': {
            title: 'Mutton Korma',
            ingredients: 'Mutton, yogurt, spices, onion',
            img: 'pics/bihari-mutton-curry.jpg'
        },
        'fish-curry': {
            title: 'Fish Curry',
            ingredients: 'Fish, tomato, spices',
            img: 'pics/fish-curry.jpg'
        },
        'chicken-butter-masala': {
            title: 'Chicken Butter Masala',
            ingredients: 'Chicken, tomato, cream, butter, spices',
            img: 'pics/butter chicken.jpg'
        },
        'mutton-curry': {
            title: 'Mutton Curry',
            ingredients: 'Mutton, spices, onion, tomato',
            img: 'pics/bihari-mutton-curry.jpg'
        },
        'uttapam': {
            title: 'Uttapam',
            ingredients: 'Rice, lentils, vegetables',
            img: 'pics/uttapam.jpg'
        },
        'vada-sambar': {
            title: 'Vada Sambar',
            ingredients: 'Lentils, rice, spices',
            img: 'pics/Vada sambar.jpg'
        },
        'thaate-idli': {
            title: 'Thaate Idli',
            ingredients: 'Rice, lentils',
            img: 'pics/thatte idly.jpg'
        },
        'masala-dosa': {
            title: 'Masala Dosa',
            ingredients: 'Rice, lentils, potato, spices, chutney',
            img: 'pics/masala dosa.jpg'
        },
        'idli-coconut-chutney': {
            title: 'Idli Coconut Chutney',
            ingredients: 'Rice cakes, coconut chutney',
            img: 'pics/idli coconut chutny.jpg'
        },
        'hakka-noodles': {
            title: 'Hakka Noodles',
            ingredients: 'Noodles, vegetables, soy sauce, spices',
            img: 'pics/Hakka-Noodles-.jpg'
        },
        'schezwan-fried-rice': {
            title: 'Schezwan Fried Rice',
            ingredients: 'Rice, vegetables, schezwan sauce',
            img: 'pics/schezwan  fried rice.jpg'
        },
        'manchurian-fried-rice': {
            title: 'Manchurian with Fried Rice',
            ingredients: 'Veg balls, fried rice, sauce',
            img: 'pics/manchurian-fried-rice.jpg'
        },
        'manchurian-noodles': {
            title: 'Manchurian with Noodles',
            ingredients: 'Veg balls, noodles, sauce',
            img: 'pics/manchurian-noodle.jpg'
        },
        'paneer-chilly-noodles': {
            title: 'Paneer Chilly With Noodles',
            ingredients: 'Paneer, noodles, capsicum, sauce',
            img: 'pics/paneer noddle.jpg'
        },
        'garlic-bread': {
            title: 'Garlic Bread',
            ingredients: 'Bread, garlic, butter',
            img: 'pics/garlic-bread.jpg'
        },
        'four-cheese-pizza': {
            title: 'Four Cheese Pizza',
            ingredients: 'Pizza base, cheese, sauce',
            img: 'pics/classic-cheese-pizza.jpg'
        },
        'alfredo-pasta': {
            title: 'Alfredo Pasta',
            ingredients: 'Pasta, cream, cheese, garlic, herbs',
            img: 'pics/alfredo_pasta.jpg'
        },
        'speghetti': {
            title: 'Speghetti',
            ingredients: 'Pasta, tomato sauce, herbs',
            img: 'pics/spaghetti.jpg'
        },
        'risotta': {
            title: 'Risotto',
            ingredients: 'Rice, cheese, cream, herbs',
            img: 'pics/risotto.jpg'
        },
        'caesar-salad': {
            title: 'Caesar Salad',
            ingredients: 'Lettuce, croutons, parmesan, caesar dressing',
            img: 'pics/ceasar salad.jpg'
        },
        'mango-smoothie': {
            title: 'Mango Smoothie',
            ingredients: 'Mango, yogurt, sugar',
            img: 'pics/Mango-Smoothie.jpg'
        },
        'cold-coffee': {
            title: 'Cold Coffee',
            ingredients: 'Coffee, milk, sugar, ice',
            img: 'pics/cold coffee.jpg'
        },
        'beer': {
            title: 'Beer (Pint)',
            ingredients: 'Barley, hops, yeast, water',
            img: 'pics/beer.jpg'
        },
        'red-wine': {
            title: 'Red Wine (Glass)',
            ingredients: 'Grapes',
            img: 'pics/red wine.jpg'
        },
        'lassi': {
            title: 'Lassi',
            ingredients: 'Dahi (yogurt), sugar',
            img: 'pics/lassi.jpg'
        }
    };

    // Modal logic
    const modal = document.getElementById('dish-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const dishImg = document.getElementById('dish-img');
    const dishTitle = document.getElementById('dish-title');
    const dishIngredients = document.getElementById('dish-ingredients');

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const key = item.getAttribute('data-dish');
            const details = dishDetails[key];
            if (details) {
                dishTitle.textContent = details.title;
                dishIngredients.textContent = 'Ingredients: ' + details.ingredients;
                dishImg.src = details.img;
                dishImg.style.display = 'block';
            } else {
                dishTitle.textContent = item.textContent.trim();
                dishIngredients.textContent = 'Ingredients: Not available';
                dishImg.style.display = 'none';
            }
            modal.style.display = 'flex';
        });
    });
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    // Close modal when clicking outside the modal content
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Favorite (heart) button logic
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering dish modal
            btn.classList.toggle('favorited');
            btn.innerHTML = btn.classList.contains('favorited') ? '&#10084;' : '&#9825;';
        });
    });

    // Cuisine filter feature
    const cuisineFilter = document.getElementById('cuisine-filter');
    if (cuisineFilter) {
        cuisineFilter.addEventListener('change', function() {
            const value = cuisineFilter.value;
            const cuisineMap = {
                'north-indian': 0,
                'south-indian': 1,
                'chinese': 2,
                'italian': 3,
                'continental': 4,
                'beverages': 5
            };
            document.querySelectorAll('.menu-section').forEach((section, idx) => {
                if (value === 'all') {
                    section.style.display = '';
                } else if (cuisineMap[value] === idx) {
                    section.style.display = '';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    }

    // About page: Show bubble on tap for mobile users
    if (document.querySelector('.profile-card img')) {
        document.querySelectorAll('.profile-card img').forEach(function(img) {
            img.addEventListener('touchstart', function(e) {
                const bubble = img.nextElementSibling;
                if (bubble) {
                    bubble.style.display = 'block';
                    bubble.style.opacity = 1;
                    bubble.style.transform = 'translate(-50%, -130%) scale(1.05)';
                }
            });
            img.addEventListener('touchend', function(e) {
                setTimeout(function() {
                    const bubble = img.nextElementSibling;
                    if (bubble) {
                        bubble.style.display = '';
                        bubble.style.opacity = 0;
                    }
                }, 1200);
            });
        });
    }

    // Smooth scrolling for Contact link
    const contactLink = document.querySelector('nav a[href="#contact"]');
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                e.preventDefault();
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    // Smooth scrolling for Testimonials link (if added in nav)
    const testimonialsLink = document.querySelector('nav a[href="#testimonials"]');
    if (testimonialsLink) {
        testimonialsLink.addEventListener('click', function(e) {
            const testimonialsSection = document.getElementById('testimonials');
            if (testimonialsSection) {
                e.preventDefault();
                testimonialsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Login/Register Modal Logic
    (function() {
        // Modal elements
        const loginBtn = document.getElementById('login-btn');
        const authModal = document.getElementById('auth-modal');
        const closeModal = document.getElementById('auth-modal-close');
        const loginTab = document.getElementById('login-tab');
        const registerTab = document.getElementById('register-tab');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const loginMessage = document.getElementById('login-message');
        const registerMessage = document.getElementById('register-message');
        let isLogin = true;

        // Show modal
        if (loginBtn && authModal) {
            loginBtn.addEventListener('click', function() {
                authModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        }
        // Close modal
        if (closeModal && authModal) {
            closeModal.addEventListener('click', function() {
                authModal.style.display = 'none';
                document.body.style.overflow = '';
                loginMessage.textContent = '';
                registerMessage.textContent = '';
            });
        }
        // Switch tabs
        if (loginTab && registerTab && loginForm && registerForm) {
            loginTab.addEventListener('click', function() {
                loginTab.classList.add('active');
                registerTab.classList.remove('active');
                loginForm.style.display = '';
                registerForm.style.display = 'none';
                loginMessage.textContent = '';
                registerMessage.textContent = '';
                isLogin = true;
            });
            registerTab.addEventListener('click', function() {
                registerTab.classList.add('active');
                loginTab.classList.remove('active');
                loginForm.style.display = 'none';
                registerForm.style.display = '';
                loginMessage.textContent = '';
                registerMessage.textContent = '';
                isLogin = false;
            });
        }
        // Register logic
        if (registerForm) {
            registerForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                const username = document.getElementById('register-username').value.trim();
                const password = document.getElementById('register-password').value;
                const confirm = document.getElementById('register-confirm').value;
                const email = document.getElementById('register-email') ? document.getElementById('register-email').value.trim() : '';
                if (username.length < 3 || password.length < 4) {
                    registerMessage.textContent = 'Username or password too short.';
                    registerMessage.classList.remove('success');
                    return;
                }
                if (password !== confirm) {
                    registerMessage.textContent = 'Passwords do not match!';
                    registerMessage.classList.remove('success');
                    return;
                }
                try {
                    const res = await fetch('http://localhost:4000/api/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password, email })
                    });
                    const data = await res.json();
                    if (res.ok) {
                        registerMessage.textContent = 'Registration successful! You can now login.';
                        registerMessage.classList.add('success');
                        setTimeout(() => { loginTab.click(); }, 1200);
                    } else {
                        registerMessage.textContent = data.error || 'Registration failed.';
                        registerMessage.classList.remove('success');
                    }
                } catch (err) {
                    registerMessage.textContent = 'Server error.';
                    registerMessage.classList.remove('success');
                }
            });
        }
        // Login logic
        if (loginForm) {
            loginForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                const username = document.getElementById('login-username').value.trim();
                const password = document.getElementById('login-password').value;
                try {
                    const res = await fetch('http://localhost:4000/api/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password })
                    });
                    const data = await res.json();
                    if (res.ok) {
                        localStorage.setItem('currentUser', username);
                        loginMessage.textContent = 'Login successful!';
                        loginMessage.classList.add('success');
                        setTimeout(() => {
                            authModal.style.display = 'none';
                            document.body.style.overflow = '';
                            updateLoginStatus();
                        }, 900);
                    } else {
                        loginMessage.textContent = data.error || 'Login failed.';
                        loginMessage.classList.remove('success');
                    }
                } catch (err) {
                    loginMessage.textContent = 'Server error.';
                    loginMessage.classList.remove('success');
                }
            });
        }
        // Show username and logout
        function updateLoginStatus() {
            const user = localStorage.getItem('currentUser');
            if (user && loginBtn) {
                loginBtn.textContent = `Welcome, ${user} (Logout)`;
                loginBtn.classList.add('logged-in');
            } else if (loginBtn) {
                loginBtn.textContent = 'Login';
                loginBtn.classList.remove('logged-in');
            }
        }
        // Logout on click if logged in
        if (loginBtn) {
            loginBtn.addEventListener('click', function() {
                if (loginBtn.classList.contains('logged-in')) {
                    localStorage.removeItem('currentUser');
                    updateLoginStatus();
                }
            });
        }
        // On page load
        updateLoginStatus();
        // Close modal on outside click
        if (authModal) {
            authModal.addEventListener('click', function(e) {
                if (e.target === authModal) {
                    authModal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
        }
    })();

    // Login/Logout/Profile button logic for all pages
    const loginBtn = document.getElementById('login-btn');
    const profileLink = document.getElementById('profile-link');
    const logoutModal = document.getElementById('logout-modal');
    const logoutConfirmBtn = document.getElementById('logout-confirm-btn');
    const logoutCancelBtn = document.getElementById('logout-cancel-btn');
    const user = localStorage.getItem('currentUser');
    // Always use username for greeting
    let displayName = user ? user : '';
    if (loginBtn && profileLink) {
        if (user) {
            loginBtn.textContent = `Logout`;
            profileLink.textContent = `My Profile`;
            profileLink.href = 'profile.html';
            profileLink.style.display = 'inline-block';
            loginBtn.style.display = 'inline-block';
        } else {
            loginBtn.textContent = 'Login';
            profileLink.textContent = 'My Profile';
            profileLink.href = 'login.html';
            profileLink.style.display = 'none';
            loginBtn.style.display = 'inline-block';
        }
        // Remove any previous click handlers
        loginBtn.onclick = null;
        // Add correct click handler
        loginBtn.addEventListener('click', function(e) {
            if (localStorage.getItem('currentUser')) {
                if (logoutModal) logoutModal.style.display = 'flex';
            } else {
                window.location.href = 'login.html';
            }
        });
        if (logoutConfirmBtn) {
            logoutConfirmBtn.onclick = function() {
                localStorage.removeItem('currentUser');
                if (logoutModal) logoutModal.style.display = 'none';
                window.location.reload();
            };
        }
        if (logoutCancelBtn) {
            logoutCancelBtn.onclick = function() {
                if (logoutModal) logoutModal.style.display = 'none';
            };
        }
        profileLink.onclick = function(e) {
            if (!localStorage.getItem('currentUser')) {
                e.preventDefault();
                window.location.href = 'login.html';
            } else {
                // allow navigation to profile.html
            }
        };
        if (logoutModal) {
            logoutModal.addEventListener('click', function(e) {
                if (e.target === logoutModal) logoutModal.style.display = 'none';
            });
        }
    }

    /* Sticky Navbar, Dark Mode Toggle, Toast Notification, and Button Animation Enhancements */
    // Sticky navbar shadow on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 2px 16px rgba(106,27,154,0.13)';
            navbar.style.background = '#ede2ff';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = '';
        }
    });

    // Dark mode toggle
    const darkToggle = document.createElement('button');
    darkToggle.textContent = '🌙';
    darkToggle.title = 'Toggle dark mode';
    darkToggle.style.cssText = 'margin-left:1rem; border:none; background:none; font-size:1.3rem; cursor:pointer;';
    document.querySelector('.nav-auth').appendChild(darkToggle);

    darkToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Toast notification
    function showToast(msg, type = 'info') {
        let toast = document.createElement('div');
        toast.textContent = msg;
        toast.className = 'toast ' + type;
        document.body.appendChild(toast);
        setTimeout(() => { toast.classList.add('show'); }, 10);
        setTimeout(() => { toast.classList.remove('show'); setTimeout(()=>toast.remove(), 400); }, 2600);
    }

    // Animate Book a Table button
    const bookBtn = document.querySelector('.book-table-btn');
    if (bookBtn) {
        bookBtn.addEventListener('mouseenter', function() {
            bookBtn.style.transform = 'scale(1.08)';
            bookBtn.style.background = 'linear-gradient(90deg,#fbc2eb,#a18cd1)';
            bookBtn.style.boxShadow = '0 4px 16px rgba(106,27,154,0.13)';
        });
        bookBtn.addEventListener('mouseleave', function() {
            bookBtn.style.transform = 'scale(1)';
            bookBtn.style.background = '';
            bookBtn.style.boxShadow = '';
        });
        bookBtn.addEventListener('click', function() {
            showToast('Redirecting to reservation...', 'success');
        });
    }

    // Show toast on login/logout
    if (window._toastLoginLogoutAdded !== true) {
        window._toastLoginLogoutAdded = true;
        const loginBtn2 = document.getElementById('login-btn');
        const logoutConfirmBtn2 = document.getElementById('logout-confirm-btn');
        if (loginBtn2) {
            loginBtn2.addEventListener('click', function() {
                if (localStorage.getItem('currentUser')) {
                    showToast('Logged out successfully!', 'success');
                }
            });
        }
        if (logoutConfirmBtn2) {
            logoutConfirmBtn2.addEventListener('click', function() {
                showToast('Logged out successfully!', 'success');
            });
        }
    }

    // Profile page logic
    const profileUsername = document.getElementById('profile-username');
    const profileEmail = document.getElementById('profile-email');
    const loyaltyPoints = document.getElementById('loyalty-points');
    const profilePic = document.getElementById('profile-pic');
    const profilePicUpload = document.getElementById('profile-pic-upload');
    const profilePicUploadBtn = document.getElementById('profile-pic-upload-btn');
    const tabButtons = document.querySelectorAll('.profile-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const myReservations = document.getElementById('my-reservations');
    const favoriteDishes = document.getElementById('favorite-dishes');
    const noFavoritesMsg = document.getElementById('no-favorites-msg');
    const accountSettingsForm = document.getElementById('account-settings-form');
    const settingsEmail = document.getElementById('settings-email');
    const settingsPassword = document.getElementById('settings-password');
    const settingsMessage = document.getElementById('settings-message');
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackText = document.getElementById('feedback-text');
    const feedbackMessage = document.getElementById('feedback-message');

    // Tab switching
    if (tabButtons.length) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                tabButtons.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.style.display = 'none');
                this.classList.add('active');
                document.getElementById('tab-' + this.dataset.tab).style.display = '';
            });
        });
    }

    // Fetch user profile data and render favorites with dish details
    function loadProfile() {
        const username = localStorage.getItem('currentUser');
        if (!username) return;
        fetch(`http://localhost:4000/api/user/${username}`)
            .then(res => res.json())
            .then(async data => {
                if (profileUsername) profileUsername.textContent = data.username;
                if (profileEmail) profileEmail.textContent = data.email;
                if (loyaltyPoints) loyaltyPoints.textContent = (data.reservations?.length || 0) * 10;
                // Reservations
                if (myReservations) {
                    myReservations.innerHTML = '';
                    if (data.reservations && data.reservations.length) {
                        data.reservations.forEach(r => {
                            const li = document.createElement('li');
                            li.innerHTML = `<b>${r.date} ${r.time}</b> for ${r.people} - <span>${r.name}</span> <button class='cancel-res-btn' data-id='${r.id}' style='margin-left:1rem; background:#e53935; color:#fff; border:none; border-radius:10px; padding:0.2rem 0.8rem; cursor:pointer;'>Cancel</button>`;
                            myReservations.appendChild(li);
                        });
                    } else {
                        myReservations.innerHTML = '<li style="color:#888;">No reservations yet.</li>';
                    }
                }
                // Favorites (fetch menu data and render details)
                if (favoriteDishes) {
                    favoriteDishes.innerHTML = '';
                    if (data.favorites && data.favorites.length) {
                        // Fetch menu data
                        let menuData = [];
                        try {
                            const menuRes = await fetch('menu-data.json');
                            menuData = await menuRes.json();
                        } catch {}
                        data.favorites.forEach(dishId => {
                            const dish = menuData.find(d => d.id === dishId);
                            const li = document.createElement('li');
                            if (dish) {
                                li.innerHTML = `<img src='${dish.img}' alt='${dish.title}' style='width:38px; height:38px; border-radius:8px; object-fit:cover; margin-right:0.7rem; vertical-align:middle;'> <b>${dish.title}</b> <span style='color:#888; font-size:0.98em; margin-left:0.7rem;'>${dish.ingredients}</span>`;
                            } else {
                                li.textContent = dishId;
                            }
                            favoriteDishes.appendChild(li);
                        });
                        if (noFavoritesMsg) noFavoritesMsg.style.display = 'none';
                    } else {
                        if (noFavoritesMsg) noFavoritesMsg.style.display = '';
                    }
                }
                // Account settings
                if (settingsEmail) settingsEmail.value = data.email;
            });
    }
    loadProfile();

    // Cancel reservation
    if (myReservations) {
        myReservations.addEventListener('click', function(e) {
            if (e.target.classList.contains('cancel-res-btn')) {
                const id = e.target.dataset.id;
                fetch(`/api/reservations/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(() => {
                        showToast('Reservation cancelled', 'success');
                        loadProfile();
                    });
            }
        });
    }

    // Remove favorite
    if (favoriteDishes) {
        favoriteDishes.addEventListener('click', function(e) {
            if (e.target.classList.contains('remove-fav-btn')) {
                const dish = e.target.dataset.dish;
                const username = localStorage.getItem('currentUser');
                fetch(`/api/user/${username}/favorites`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'remove', dish })
                })
                .then(res => res.json())
                .then(() => {
                    showToast('Removed from favorites', 'info');
                    loadProfile();
                });
            }
        });
    }

    // Profile picture upload (client-only)
    if (profilePicUploadBtn && profilePicUpload && profilePic) {
        profilePicUploadBtn.addEventListener('click', () => profilePicUpload.click());
        profilePicUpload.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profilePic.src = e.target.result;
                    localStorage.setItem('profilePic', e.target.result);
                };
                reader.readAsDataURL(file);
            }
        });
        // Load from localStorage
        const savedPic = localStorage.getItem('profilePic');
        if (savedPic) profilePic.src = savedPic;
    }

    // Account settings update
    if (accountSettingsForm) {
        accountSettingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = localStorage.getItem('currentUser');
            fetch(`/api/user/${username}/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: settingsEmail.value,
                    password: settingsPassword.value
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    settingsMessage.textContent = 'Profile updated!';
                    showToast('Profile updated', 'success');
                    loadProfile();
                } else {
                    settingsMessage.textContent = data.error || 'Update failed.';
                }
            });
        });
    }

    // Feedback form
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = localStorage.getItem('currentUser');
            fetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
                    feedback: feedbackText.value
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    feedbackMessage.textContent = 'Thank you for your feedback!';
                    showToast('Feedback sent', 'success');
                    feedbackText.value = '';
                } else {
                    feedbackMessage.textContent = data.error || 'Failed to send feedback.';
                }
            });
        });
    }

    // Reservation form: connect to backend AND Formspree
    if (window.location.pathname.endsWith('reservation.html')) {
        const form = document.querySelector('.reservation-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const user = localStorage.getItem('currentUser');
                const name = form.querySelector('input[name="name"]').value.trim();
                const phone = form.querySelector('input[name="phone"]').value.trim();
                const email = form.querySelector('input[name="email"]').value.trim();
                const date = form.querySelector('input[name="date"]').value;
                const time = form.querySelector('input[name="time"]').value;
                const people = form.querySelector('select[name="people"]').value;
                const requests = form.querySelector('textarea[name="requests"]').value;
                const confirmDiv = form.querySelector('.form-confirmation');
                if (!user) {
                    confirmDiv.textContent = 'Please login to make a reservation.';
                    confirmDiv.style.display = 'block';
                    confirmDiv.style.color = '#e53935';
                    return;
                }
                // Send to backend
                fetch('http://localhost:4000/api/reservations', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: user, name, phone, email, date, time, people, requests })
                })
                .then(r => r.json())
                .then(resp => {
                    // Send to Formspree regardless of backend result
                    fetch('https://formspree.io/f/xzzrljry', {
                        method: 'POST',
                        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name, phone, email, date, time, people, requests })
                    })
                    .then(fsResp => fsResp.json())
                    .then(fsData => {
                        if (resp.success) {
                            confirmDiv.textContent = 'Reservation successful!';
                            confirmDiv.style.display = 'block';
                            confirmDiv.style.color = '#388e3c';
                            form.reset();
                        } else {
                            confirmDiv.textContent = resp.error || 'Reservation failed.';
                            confirmDiv.style.display = 'block';
                            confirmDiv.style.color = '#e53935';
                        }
                    })
                    .catch(() => {
                        confirmDiv.textContent = 'Reservation saved, but failed to notify via email.';
                        confirmDiv.style.display = 'block';
                        confirmDiv.style.color = '#e53935';
                    });
                })
                .catch(() => {
                    confirmDiv.textContent = 'Server error.';
                    confirmDiv.style.display = 'block';
                    confirmDiv.style.color = '#e53935';
                });
            });
        }
    }

    // Favorite (heart) button logic: connect to backend
    if (window.location.pathname.endsWith('menu.html')) {
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const user = localStorage.getItem('currentUser');
                const dish = btn.closest('.menu-item').getAttribute('data-dish');
                if (!user) {
                    showToast('Login to add favorites', 'error');
                    return;
                }
                const isFav = btn.classList.toggle('favorited');
                btn.innerHTML = isFav ? '&#10084;' : '&#9825;';
                fetch(`http://localhost:4000/api/user/${user}/favorites`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ dish, action: isFav ? 'add' : 'remove' })
                })
                .then(r => r.json())
                .then(resp => {
                    if (resp.success) {
                        showToast(isFav ? 'Added to favorites' : 'Removed from favorites', 'success');
                    } else {
                        showToast(resp.error || 'Failed to update favorites', 'error');
                    }
                })
                .catch(() => {
                    showToast('Server error', 'error');
                });
            });
        });
    }

    // Menu favorites logic (fix: check backend state before toggling)
    const menuFavoriteBtns = document.querySelectorAll('.menu-item .favorite-btn');
    if (menuFavoriteBtns.length) {
        // On page load, fetch user favorites and set button state
        const user = localStorage.getItem('currentUser');
        if (user) {
            fetch(`http://localhost:4000/api/user/${user}`)
                .then(res => res.json())
                .then(data => {
                    const favs = data.favorites || [];
                    menuFavoriteBtns.forEach(btn => {
                        const dish = btn.closest('.menu-item').getAttribute('data-dish');
                        if (favs.includes(dish)) {
                            btn.classList.add('favorited');
                            btn.innerHTML = '&#10084;';
                        } else {
                            btn.classList.remove('favorited');
                            btn.innerHTML = '&#9825;';
                        }
                    });
                });
        }
        menuFavoriteBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const user = localStorage.getItem('currentUser');
                const dish = this.closest('.menu-item').getAttribute('data-dish');
                if (!user) {
                    showToast('Login to add favorites', 'error');
                    return;
                }
                const isCurrentlyFav = btn.classList.contains('favorited');
                const action = isCurrentlyFav ? 'remove' : 'add';
                // Optimistically toggle UI
                btn.classList.toggle('favorited');
                btn.innerHTML = !isCurrentlyFav ? '&#10084;' : '&#9825;';
                fetch(`http://localhost:4000/api/user/${user}/favorites`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ dish, action })
                })
                .then(r => r.json())
                .then(resp => {
                    if (resp.success) {
                        showToast(action === 'add' ? 'Added to favorites' : 'Removed from favorites', 'success');
                        // If profile page is open in another tab, reload it
                        if (window.opener && !window.opener.closed) {
                            window.opener.postMessage('reloadProfile', '*');
                        }
                    } else {
                        showToast(resp.error || 'Failed to update favorites', 'error');
                        btn.classList.toggle('favorited', isCurrentlyFav);
                        btn.innerHTML = isCurrentlyFav ? '&#10084;' : '&#9825;';
                    }
                })
                .catch(() => {
                    showToast('Server error', 'error');
                    btn.classList.toggle('favorited', isCurrentlyFav);
                    btn.innerHTML = isCurrentlyFav ? '&#10084;' : '&#9825;';
                });
            });
        });
    }

    // Listen for reloadProfile message on profile page
    if (window.location.pathname.includes('profile.html')) {
        window.addEventListener('message', function(event) {
            if (event.data === 'reloadProfile') {
                if (typeof loadProfile === 'function') loadProfile();
            }
        });
    }

    // User Review Submission (Review Page)
    if (window.location.pathname.endsWith('reviews.html')) {
        const reviewForm = document.getElementById('user-review-form');
        const reviewText = document.getElementById('user-review-text');
        const reviewMsg = document.getElementById('user-review-message');
        const starRating = document.getElementById('star-rating');
        const ratingInput = document.getElementById('user-review-rating');
        if (starRating && ratingInput) {
            let currentRating = 0;
            starRating.querySelectorAll('.star').forEach(star => {
                star.addEventListener('mouseenter', function() {
                    const val = parseInt(this.getAttribute('data-value'));
                    highlightStars(val);
                });
                star.addEventListener('mouseleave', function() {
                    highlightStars(currentRating);
                });
                star.addEventListener('click', function() {
                    currentRating = parseInt(this.getAttribute('data-value'));
                    ratingInput.value = currentRating;
                    highlightStars(currentRating);
                });
            });
            starRating.addEventListener('mouseleave', function() {
                highlightStars(currentRating);
            });
            function highlightStars(rating) {
                starRating.querySelectorAll('.star').forEach(star => {
                    const val = parseInt(star.getAttribute('data-value'));
                    star.style.color = val <= rating ? '#a18cd1' : '#ccc';
                });
            }
        }
        if (reviewForm && reviewText && reviewMsg) {
            // Only allow if user is logged in
            const user = localStorage.getItem('currentUser');
            if (!user) {
                reviewText.disabled = true;
                reviewText.placeholder = 'Login to write a review.';
                reviewForm.querySelector('button[type="submit"]').disabled = true;
                reviewMsg.textContent = 'You must be logged in to submit a review.';
                if (starRating) starRating.style.pointerEvents = 'none';
            }
            reviewForm.addEventListener('submit', function(e) {
                e.preventDefault();
                if (!user) return;
                const text = reviewText.value.trim();
                const rating = parseInt(ratingInput.value);
                if (!text) {
                    reviewMsg.textContent = 'Please write something!';
                    return;
                }
                if (!rating || rating < 1 || rating > 5) {
                    reviewMsg.textContent = 'Please select a rating (1-5 stars).';
                    return;
                }
                fetch('http://localhost:4000/api/feedback', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: user, text, rating })
                })
                .then(function(r) { return r.json(); })
                .then(function(data) {
                    if (data.success) {
                        reviewMsg.textContent = 'Thank you for your review!';
                        reviewText.value = '';
                        ratingInput.value = 0;
                        if (starRating) starRating.querySelectorAll('.star').forEach(star => star.style.color = '#ccc');
                    } else {
                        reviewMsg.textContent = data.error || 'Failed to submit review.';
                    }
                })
                .catch(function() {
                    reviewMsg.textContent = 'Server error. Please try again later.';
                });
            });
        }
    }

    // --- User Reviews: Load and Display Feedback ---
    if (window.location.pathname.endsWith('reviews.html')) {
        const reviewsList = document.getElementById('reviews-list');
        const noReviewsMsg = document.getElementById('no-reviews-msg');

        // Fetch feedback.json from backend
        fetch('http://localhost:4000/backend/data/feedback.json')
            .then(res => res.json())
            .then(data => {
                reviewsList.innerHTML = '';
                if (data && data.length) {
                    data.reverse().forEach(review => {
                        const div = document.createElement('div');
                        div.className = 'review-item';
                        div.style = 'border-bottom:1px solid #eee; margin-bottom:1.2rem; padding-bottom:1.2rem;';
                        div.innerHTML = `
                            <div style="display:flex; align-items:center; gap:0.7rem; margin-bottom:0.3rem;">
                                <span style="font-weight:600; color:#6a1b9a;">${review.username || 'Anonymous'}</span>
                                <span style="color:#fbc02d; font-size:1.2rem;">${'★'.repeat(Number(review.rating))}${'☆'.repeat(5-Number(review.rating))}</span>
                                <span style="color:#888; font-size:0.95em; margin-left:auto;">${review.date || ''}</span>
                            </div>
                            <div style="color:#444; font-size:1.08rem;">${review.text}</div>
                        `;
                        reviewsList.appendChild(div);
                    });
                    noReviewsMsg.style.display = 'none';
                } else {
                    noReviewsMsg.style.display = '';
                }
            })
            .catch(() => {
                reviewsList.innerHTML = '';
                noReviewsMsg.style.display = '';
            });
    }

    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const form = e.target;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // 1. Send to backend
            try {
                await fetch('/api/reservations', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            } catch (err) {
                showConfirmation('Error submitting reservation to backend.', true);
                return;
            }

            // 2. Send to Formspree
            try {
                await fetch('https://formspree.io/f/xzzrljry', {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
            } catch (err) {
                showConfirmation('Error submitting reservation to Formspree.', true);
                return;
            }

            showConfirmation('Reservation submitted successfully!');
            form.reset();
        });

        function showConfirmation(message, isError) {
            const confirmation = reservationForm.querySelector('.form-confirmation');
            confirmation.style.display = 'block';
            confirmation.style.color = isError ? 'red' : 'green';
            confirmation.textContent = message;
            setTimeout(() => {
                confirmation.style.display = 'none';
            }, 4000);
        }
    }
});
