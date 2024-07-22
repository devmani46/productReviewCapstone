document.getElementById('reset-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`A verification code will be sent to ${email}`);
});

document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'login.html';
});

