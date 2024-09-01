// Initialize an empty cart array
let cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    // Add the item to the cart array
    cart.push({ name: itemName, price: itemPrice });
    // Alert the user that the item has been added
    alert(`${itemName} added to the cart.`);
    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    // Get the cart-items element
    let cartItems = document.getElementById('cart-items');
    // Clear the previous items from the cart
    cartItems.innerHTML = '';
    // Initialize total price
    let total = 0;

    // Loop through each item in the cart
    cart.forEach(item => {
        // Add each item to the cart display
        cartItems.innerHTML += `<li>${item.name} - $${item.price}</li>`;
        // Update the total price
        total += item.price;
    });

    // Display the total price
    document.getElementById('total').innerText = `Total: $${total}`;
}

// Function to handle the checkout process
function checkout() {
    // Alert the user that the order has been placed
    alert('Thank you for your order!');
    // Clear the cart
    cart = [];
    // Update the cart display
    updateCart();
}

// Function to show a specific menu category
function showCategory(category) {
    // Hide all menu categories
    document.querySelectorAll('.menu-items').forEach(item => item.style.display = 'none');
    // Show the selected category
    document.getElementById(category).style.display = 'block';
}
