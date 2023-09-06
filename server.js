const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware to parse JSON data from incoming requests
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

let orders = [];

// Endpoint to serve the main page (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to serve the order view page (orderView.html)
app.get('/view-orders', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'orderView.html'));
});

// Endpoint to receive data from the client
app.post('/receive-data', (req, res) => {
    console.log("Received data:", req.body);
    res.status(200).send("Data received successfully!");
});

// Endpoint to receive order from the client
app.post('/submit-order', (req, res) => {
    const order = req.body;
    console.log("Received order:", order);
    orders.push(order);
    res.json({ message: 'Order received!' });
});

// Endpoint to get all orders
app.get('/get-orders', (req, res) => {
    res.json(orders);
});

// Start the server on port 8080
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
