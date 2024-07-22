document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form form');
    const signUpForm = document.querySelector('.sign-up-form form');
    const flipContainer = document.querySelector('.flip-container');

    // Login Form Submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            alert('Login Successful');
        } else {
            alert('Please enter both username and password');
        }
    });

    // Sign-Up Form Submission
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (username && email && password && password === confirmPassword) {
            alert('Sign Up Successful');
        } else {
            alert('Please fill all fields correctly');
        }
    });


    const handleFlip = () => {
        if (flipContainer.classList.contains('flip')) {
            flipContainer.classList.remove('flip');
        } else {
            flipContainer.classList.add('flip');
        }
    };

    document.querySelectorAll('.flip-toggle').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            handleFlip();
        });
    });


    if (window.location.pathname.includes('signup.html')) {
        flipContainer.classList.add('flip');
    } else if (window.location.pathname.includes('login.html')) {
        flipContainer.classList.remove('flip');
    }
});


