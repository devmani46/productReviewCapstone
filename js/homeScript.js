document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('click', () => {
            const page = product.getAttribute('data-page');
            window.location.href = page;
        });
    });

    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('click', () => {
            const page = feature.getAttribute('data-page');
            window.location.href = page;
        });
    });

    document.getElementById('notificationButton').addEventListener('click', () => {
        window.location.href = 'notifications.html';
    });

    document.getElementById('profileButton').addEventListener('click', () => {
        window.location.href = 'profile.html';
    });
});

