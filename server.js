const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  // Required for setting up the static files path

const app = express();

// Middleware to parse JSON data from incoming requests
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to receive data from the client
app.post('/receive-data', (req, res) => {
    console.log("Received data:", req.body);  // This will print the received data to the terminal
    res.status(200).send("Data received successfully!");
});

// Start the server on port 8080
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
const cors = require('cors');
app.use(cors());

app.post('/submit-order', (req, res) => {
    const order = req.body;
    console.log("Received order:", order);

    // Here, you can process the order, save it to a database, etc.

    res.json({ message: 'Order received!' });
});