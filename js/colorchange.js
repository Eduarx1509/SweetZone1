function changeImage(productClass, color) {
    var productImage = document.querySelector('.' + productClass);
    var imagePath;
    if (color) {
        imagePath = 'img/lentesosos' + color + '.webp';
    }
    productImage.src = imagePath;
}

function changeImage1(productClass, color) {
    var productImage = document.querySelector('.' + productClass);
    var imagePath;
    if (color) {
        imagePath = 'img/lentescorazonefecto' + color + '.webp';
    }
    productImage.src = imagePath;
}
