// app.js
const products = [
    { id: 1, name: "Товар 1", price: 100 },
    { id: 2, name: "Товар 2", price: 200 },
    // Добавьте больше товаров по мере необходимости
];

function displayProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Цена: ${product.price} руб.</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        productsDiv.appendChild(productElement);
    });
}

let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        window.Telegram.WebApp.showAlert(`Товар "${product.name}" добавлен в корзину!`);
        // В реальном приложении здесь бы вы отправляли данные на сервер для обновления корзины
        console.log(cart);
    }
}

// Инициализация Telegram Web App
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();
displayProducts();
