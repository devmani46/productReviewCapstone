document.querySelector('.add-product-btn').addEventListener('click', function() {
    const newProduct = document.createElement('button');
    newProduct.className = 'product-btn';
    newProduct.innerHTML = `
        <img src="img/newProduct.png" alt="New Product">
        <div class="product-info">
            <p>New Product</p>
            <p>Price: $XX.XX</p>
        </div>
    `;
    newProduct.onclick = function() {
        window.location.href = '#'; // Set the link to the new product page
    };
    document.querySelector('.products-container').appendChild(newProduct);
});
