document.addEventListener('DOMContentLoaded', () => {
    // Initial cart setup
    let cart = [];
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Function to show/hide menu categories
    window.showCategory = function (category) {
        const categories = document.querySelectorAll('.menu-items');
        categories.forEach(cat => {
            if (cat.id === category) {
                cat.style.display = 'block';
            } else {
                cat.style.display = 'none';
            }
        });
    };

    // Function to increment quantity
    window.incrementQuantity = function (item) {
        const quantityElement = document.getElementById(`quantity-${item}`);
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
    };

    // Function to decrement quantity
    window.decrementQuantity = function (item) {
        const quantityElement = document.getElementById(`quantity-${item}`);
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantityElement.textContent = quantity - 1;
        }
    };

    // Function to add item to cart
    window.addToCart = function (item, price) {
        const quantityElement = document.getElementById(`quantity-${item}`);
        const quantity = parseInt(quantityElement.textContent);

        if (quantity > 0) {
            const cartItem = cart.find(ci => ci.name === item);
            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                cart.push({ name: item, price: price, quantity: quantity });
            }
            updateCart();
            quantityElement.textContent = '0'; // Reset quantity
        }
    };

    // Function to update cart display
    function updateCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${item.name} - ₹${item.price} x ${item.quantity} = ₹${itemTotal}`;
            cartItemsElement.appendChild(cartItemElement);
        });

        totalElement.textContent = `Total: ₹${total}`;
    }

    // Buy button functionality
    document.getElementById('buy-button').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Thank you for your purchase!');
            cart = []; // Clear the cart
            updateCart(); // Update cart display
        } else {
            alert('Your cart is empty.');
        }
    });
});