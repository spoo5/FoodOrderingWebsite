document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ₹${item.price}`;
            cartItems.appendChild(li);
            total += item.price;
        });
        totalDisplay.textContent = `Total: ₹${total}`;
    }

    window.addToCart = (name, price) => {
        cart.push({ name, price });
        updateCart();
    };

    window.showCategory = (category) => {
        document.querySelectorAll('.menu-items').forEach(item => {
            item.style.display = item.id === category ? 'block' : 'none';
        });
    };

    // Show the first category by default
    showCategory('appetizers');
});
