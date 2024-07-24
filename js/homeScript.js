
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded");
});



    document.getElementById("seeMoreProducts").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        var additionalProducts = document.getElementById("additionalProducts");
        
        // Example of adding more product images
        var moreProducts = `
            <img src="img/product1.png" alt="Product 6">
            <img src="img/product1.png" alt="Product 7">
            <img src="img/product1.png" alt="Product 8">
            <img src="img/product2.png" alt="Product 9">
            <img src="img/product2.png" alt="Product 10">
            <img src="img/product2.png" alt="Product 11">
            <img src="img/product3.png" alt="Product 12">
            <img src="img/product3.png" alt="Product 13">
            <img src="img/product3.png" alt="Product 14">
            <img src="img/product4.png" alt="Product 15">
        `;
        
        additionalProducts.innerHTML = moreProducts;
        additionalProducts.style.display = "flex"; // Show the additional products container
    });

