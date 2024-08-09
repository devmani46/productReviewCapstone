document.addEventListener('DOMContentLoaded', function () {
    const images = [
        './img/product1.png', // replace with actual paths
        './img/product2.png',
        './img/product3.png',
        './img/product4.png'
    ];

    const gallery = d3.select('#image-gallery');
    
    gallery.selectAll('img')
        .data(images)
        .enter()
        .append('img')
        .attr('src', d => d)
        .attr('alt', 'Product Image')
        .on('click', function (event, d) {
            // Display the selected image in the large display
            d3.select('.product-details img').attr('src', d);
        });
});
