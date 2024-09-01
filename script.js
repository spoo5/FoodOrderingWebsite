// Show the selected category
function showCategory(category) {
    const categories = document.querySelectorAll('.menu-items');
    categories.forEach(cat => {
        if (cat.id === category) {
            cat.style.display = 'flex';
        } else {
            cat.style.display = 'none';
        }
    });
}

// Add item to cart
function addToCart(item, price) {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');

    // Create a new list item for the cart
    const listItem = document.createElement('li');
    listItem.textContent = `${item} - ₹${price}`;
    cartItems.appendChild(listItem);

    // Update total price
    let currentTotal = parseFloat(total.textContent.replace('Total: ₹', '')) || 0;
    currentTotal += price;
    total.textContent = `Total: ₹${currentTotal}`;
}

// Handle checkout
function checkout() {
    alert('Thank you for your order!');
}
