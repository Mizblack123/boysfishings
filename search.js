// search.js

// 페이지가 로드되면 바로 실행됩니다.
document.addEventListener('DOMContentLoaded', () => {
    // URL에서 'query' 파라미터(검색어)를 가져옵니다.
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query').toLowerCase(); // 소문자로 변환하여 대소문자 구분 없이 검색

    // 결과를 표시할 HTML 요소들을 가져옵니다.
    const resultsHeader = document.getElementById('results-header');
    const productGrid = document.getElementById('product-grid');

    // 검색어를 제목에 표시합니다.
    resultsHeader.innerHTML = `'<span>${query}</span>' 검색 결과`;

    // data.js에 있는 allProducts 배열에서 일치하는 상품을 찾습니다.
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    // 검색 결과가 없을 경우
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p>검색된 상품이 없습니다.</p>';
        return;
    }

    // 검색된 각 상품에 대해 HTML 카드를 만들어 추가합니다.
    filteredProducts.forEach(product => {
        const productCard = `
            <div class="product-item">
                <img src="${product.image}" alt="${product.name}">
                <p class="brand">${product.brand}</p>
                <p class="name">${product.name}</p>
                <p class="price">${product.price}</p>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
});