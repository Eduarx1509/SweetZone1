document.addEventListener('DOMContentLoaded', function () {
    const productSection = document.getElementById('productSection');
    const productElements = document.querySelectorAll('.product');
    const searchInput = document.querySelector('.main-header__input');
    const products = Array.from(productElements).map(productElement => {
        return {
            element: productElement,
            title: productElement.querySelector('.product__title').textContent.toLowerCase()
        };
    });
    function showSearchResults(results) {
        productSection.innerHTML = '';

        if (results.length > 0) {
            // Mostrar resultados
            results.forEach(result => {
                productSection.appendChild(result.element.cloneNode(true));
            });
        } else {
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'No se encontraron resultados.';
            productSection.appendChild(noResultsMessage);
        }
    }
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm.trim() !== '') {
            const searchResultsArray = products.filter(product => product.title.includes(searchTerm));
            showSearchResults(searchResultsArray);
        } else {
            showSearchResults(products);
        }
    }
    searchInput.addEventListener('input', handleSearch);
});