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
                cat.style.display = 'flex';
            } else {
                cat.style.display = 'none';
            }
        });
    };


    // Function to decrement quantity
    window.decrementQuantity = function (item) {
        const quantityElement = document.getElementById(`quantity-${item}`);
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantityElement.textContent = quantity - 1;
        }
    };


    // Function to add an item to the cart
    window.addToCart = function (item, price) {
        const cartItem = cart.find(ci => ci.name === item);

        // If item already exists in the cart, increase its quantity
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            // If item doesn't exist in the cart, add it with quantity 1
            cart.push({ name: item, price: price, quantity: 1 });
        }

        updateCart();  // Function to update the cart display (implement as needed)

        // Show success notification
        showNotification("Item added to cart successfully!");
    };

    function showNotification(message) {
        const notificationElement = document.getElementById('notification');
        notificationElement.textContent = message;  // Set the message
        notificationElement.classList.add('show');  // Show the notification

        // Hide the notification after 2 seconds
        setTimeout(() => {
            notificationElement.classList.remove('show');
        }, 2000);
    }


    function updateCart() {
        cartItemsElement.innerHTML = ''; // Clear current cart display
        let total = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            // Create list item for cart entry
            const cartItemElement = document.createElement('li');

            // Create text showing item details
            const itemText = document.createElement('span');
            itemText.textContent = `${item.name} - ₹${item.price} x ${item.quantity} = ₹${itemTotal}`;

            // Create 'Remove' button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.style.marginLeft = '10px';
            removeButton.style.padding = '8px';
            removeButton.style.color = '#FFF';
            removeButton.style.backgroundColor = '#000';
            // Add some space between text and button
            removeButton.onclick = () => removeFromCart(index);  // Attach remove functionality

            // Append text and button to list item
            cartItemElement.appendChild(itemText);
            cartItemElement.appendChild(removeButton);

            // Add the cart item to the cart display
            cartItemsElement.appendChild(cartItemElement);
        });

        totalElement.textContent = `Total: ₹${total}`; // Update total price
    }

    // Function to remove an item from the cart by index
    function removeFromCart(index) {
        cart.splice(index, 1);  // Remove the item from the cart array
        updateCart();  // Update cart display after removal
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