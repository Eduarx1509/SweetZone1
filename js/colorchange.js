function changeImage(productClass, color) {
    var productImage = document.querySelector('.' + productClass);
    var imagePath;
    if (color) {
        imagePath = 'img/lentesosos' + color + '.webp';
    }
    productImage.src = imagePath;
}
