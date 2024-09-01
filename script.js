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

    // Function to add items to the cart
    window.addToCart = function(name, price) {
        cart.push({ name, price });
        updateCart();
    };

    // Function to show selected menu category
    window.showCategory = function(category) {
        const categories = document.querySelectorAll('.menu-items');
        categories.forEach(cat => {
            if (cat.id === category) {
                cat.style.display = 'block';
            } else {
                cat.style.display = 'none';
            }
        });
    };
});
