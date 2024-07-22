document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form form');
    const signUpForm = document.querySelector('.sign-up-form form');
    const flipContainer = document.querySelector('.flip-container');
    const helpButton = document.querySelector('.help-button');
    const privacyButton = document.querySelector('.info-button');
    const communityButton = document.querySelector('.more-button');
    const backButton = document.getElementById('back-button');
    const modal = document.getElementById('modal');
    const container = document.querySelector('.container');
    const helpImage = document.querySelector('.help-image');
    const privacyImage = document.querySelector('.Privacy-image');
    const communityImage = document.querySelector('.Community-image');

    // Hide all images initially
    const hideAllImages = () => {
        helpImage.style.display = 'none';
        privacyImage.style.display = 'none';
        communityImage.style.display = 'none';
    };

    hideAllImages(); // Initial hiding of images

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

    // Modal functionality
    const showModal = (imageElement) => {
        hideAllImages();
        imageElement.style.display = 'block';
        modal.style.display = 'flex';
        container.classList.add('blurred');
    };

    helpButton.addEventListener('click', () => {
        showModal(helpImage);
    });

    privacyButton.addEventListener('click', () => {
        showModal(privacyImage);
    });

    communityButton.addEventListener('click', () => {
        showModal(communityImage);
    });

    backButton.addEventListener('click', () => {
        modal.style.display = 'none';
        container.classList.remove('blurred');
    });
});
