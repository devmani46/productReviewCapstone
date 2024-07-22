document.getElementById('reset-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`A verification code will be sent to ${email}`);

    document.getElementById('otp-input-container').style.display = 'block';
    document.getElementById('reset-password-form').style.display = 'none';
});

document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.getElementById('otp-submit-button').addEventListener('click', function(event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;
    alert(`OTP submitted: ${otp}`);

    // Show the password reset successful section
    document.getElementById('password-reset-successful').style.display = 'block';
    document.getElementById('otp-input-container').style.display = 'none';
});

document.getElementById('new-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword === confirmPassword) {
        alert('Password reset successful!');
        // Redirect to login page or do further processing
    } else {
        alert('Passwords do not match. Please try again.');
    }
});

document.getElementById('back-button').addEventListener('click', function() {
    window.history.back();
});
