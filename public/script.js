// script.js

// Define your menu
const menu = {
    burgers: [
        { name: 'Whopper', price: 5.99 },
        { name: 'Double Whopper', price: 6.99 },
        { name: 'Whopper with Bacon & Cheese', price: 7.99 },
        { name: 'Triple Whopper', price: 8.99 },
        { name: 'Whopper with Cheese', price: 6.49 },
        { name: 'Whopper Jr.', price: 4.99 },
        { name: 'Double Bacon King', price: 7.99 },
        { name: 'Single Quarter Pound King', price: 6.99 },
        { name: 'Bacon Cheeseburger', price: 5.99 },
        { name: 'Double Cheeseburger', price: 6.49 },
        { name: 'Bacon Double Cheeseburger', price: 7.49 },
        { name: 'Triple Whopper', price: 8.99 },
        { name: 'Single Bacon King', price: 6.99 },
        { name: 'Big King', price: 6.49 },
        { name: 'Cheeseburger', price: 4.99 },
        // Add all your burgers here
    ],
    chicken: [
        { name: 'Original Chicken Sandwich', price: 4.99 },
        { name: 'Spicy Chicken Sandwich', price: 5.49 },
        { name: 'BK Royal Crispy Chicken', price: 5.99 },
        { name: 'Spicy BK Royal Crispy Chicken', price: 6.49 },
        { name: 'Bacon and Swiss BK Royal Crispy Chicken', price: 6.99 },
        { name: 'Italian BK Royal Crispy Chicken', price: 6.99 },
        { name: 'Italian Original Chicken Sandwich', price: 5.99 },
        { name: 'Big Fish', price: 5.49 },
        // Add all your chicken items here
    ],
    sidesDrinks: [
        { name: 'Small French Fries', price: 1.99 },
        { name: 'Medium French Fries', price: 2.49 },
        { name: 'Large French Fries', price: 2.99 },
        { name: 'Small Hash Browns', price: 1.99 },
        { name: 'Medium Hash Browns', price: 2.49 },
        { name: 'Large Hash Browns', price: 2.99 },
        { name: 'Small Applesauce', price: 1.49 },
        { name: 'Medium Applesauce', price: 1.99 },
        { name: '6-piece Mozzarella Sticks', price: 3.99 },
        { name: '10-piece Mozzarella Sticks', price: 5.99 },
        { name: 'Small Onion Rings', price: 1.99 },
        { name: 'Medium Onion Rings', price: 2.49 },
        { name: 'Small Potato Wedges', price: 1.99 },
        { name: 'Medium Potato Wedges', price: 2.49 },
        { name: 'Baked Potato with Sour Cream and Chives', price: 2.99 },
        { name: 'Baked Potato with Bacon and Cheese', price: 3.49 },
        { name: 'Garden Salad', price: 3.99 },
        { name: 'Caesar Salad', price: 3.99 },
        { name: 'Cucumbers and Ranch Dressing', price: 1.99 },
    ],
    other: [
        { name: 'Impossible Whopper', price: 6.99 },
    ],
};

// Function to add an item to the menu
function addItemToMenu(section, item) {
    const sectionElement = document.getElementById(section);

    const itemElement = document.createElement('div');
    itemElement.classList.add('item');

    const itemNameElement = document.createElement('span');
    itemNameElement.classList.add('item-name');
    itemNameElement.textContent = item.name;
    itemElement.appendChild(itemNameElement);

    const itemPriceElement = document.createElement('span');
    itemPriceElement.classList.add('item-price');
    itemPriceElement.textContent = `$${item.price.toFixed(2)}`;
    itemElement.appendChild(itemPriceElement);

    const itemQuantityElement = document.createElement('input');
    itemQuantityElement.type = 'number';
    itemQuantityElement.min = 0;
    itemQuantityElement.value = 0;
    itemQuantityElement.classList.add('item-quantity');
    itemElement.appendChild(itemQuantityElement);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to order';
    addButton.addEventListener('click', () => addToOrder(item, itemQuantityElement));
    itemElement.appendChild(addButton);

    sectionElement.appendChild(itemElement);
}

// Function to add an item to the order
function addToOrder(item, quantityElement) {
    const quantity = Number(quantityElement.value);
    if (quantity <= 0) return;

    const orderElement = document.getElementById('order');

    const orderItemElement = document.createElement('p');
    orderItemElement.textContent = `${item.name} x ${quantity} = $${(item.price * quantity).toFixed(2)}`;

    orderElement.appendChild(orderItemElement);
}

// Add all items to the menu
for (const item of menu.burgers) addItemToMenu('burgers', item);
for (const item of menu.chicken) addItemToMenu('chicken', item);
for (const item of menu.sidesDrinks) addItemToMenu('sides-drinks', item);
for (const item of menu.other) addItemToMenu('other', item);
// Function to add an item to the order
function addToOrder(item, quantityElement) {
    const quantity = Number(quantityElement.value);
    if (quantity <= 0) return;

    const orderElement = document.getElementById('order');

    const orderItemElement = document.createElement('p');
    orderItemElement.textContent = `${item.name} x ${quantity} = $${(item.price * quantity).toFixed(2)}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => orderElement.removeChild(orderItemElement));
    orderItemElement.appendChild(removeButton);

    orderElement.appendChild(orderItemElement);
}
// Define a variable to keep track of the total price
let totalPrice = 0;
const taxRate = 0.06; // 6% tax rate

// Function to add an item to the order
function addToOrder(item, quantityElement) {
    const quantity = Number(quantityElement.value);
    if (quantity <= 0) return;

    const orderElement = document.getElementById('order');

    const orderItemElement = document.createElement('p');
    const itemTotalPrice = item.price * quantity;
    orderItemElement.textContent = `${item.name} x ${quantity} = $${itemTotalPrice.toFixed(2)}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        orderElement.removeChild(orderItemElement);
        totalPrice -= itemTotalPrice; // Subtract the price of the removed item from the total
        updateTotalPriceDisplay();
    });
    orderItemElement.appendChild(removeButton);

    orderElement.appendChild(orderItemElement);

    totalPrice += itemTotalPrice; // Add the price of the new item to the total
    updateTotalPriceDisplay();
}

// Function to update the display of the total price
function updateTotalPriceDisplay() {
    const totalPriceElement = document.getElementById('total-price');
    const tax = totalPrice * taxRate; // Calculate the tax
    const totalWithTax = totalPrice + tax; // Add the tax to the total price
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}, Tax: $${tax.toFixed(2)}, Total with Tax: $${totalWithTax.toFixed(2)}`;
}

// Add a display for the total price
const totalPriceElement = document.createElement('p');
totalPriceElement.id = 'total-price';
totalPriceElement.classList.add('total-price'); // Add a class to the total price element
document.body.appendChild(totalPriceElement);

// Global order array
let orderItems = [];

// Modified addToOrder function
function addToOrder(item, quantityElement) {
    const quantity = Number(quantityElement.value);
    if (quantity <= 0) return;

    const orderItem = {
        name: item.name,
        quantity: quantity,
        totalPrice: item.price * quantity
    };

    orderItems.push(orderItem);

    // Update the UI
    const orderElement = document.getElementById('order');
    const orderItemElement = document.createElement('p');
    orderItemElement.textContent = `${item.name} x ${quantity} = $${orderItem.totalPrice.toFixed(2)}`;

    // Add the "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        // Remove the item from the UI
        orderElement.removeChild(orderItemElement);
        
        // Remove the item from the global orderItems array
        const index = orderItems.indexOf(orderItem);
        if (index > -1) {
            orderItems.splice(index, 1);
        }
    });
    orderItemElement.appendChild(removeButton);

    orderElement.appendChild(orderItemElement);
}

// New function to send the entire order to the server
function submitOrder() {
    fetch('/submit-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderItems)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        orderItems = []; // Clear the order items
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Add an event listener to the "Submit Order" button
const submitButton = document.getElementById('submit-order');
submitButton.addEventListener('click', submitOrder);