// Import Express
const express = require('express')

// Create an Express app
const app = express()

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
  
  // Define routes here:

//   1. Be Polite, Greet the User
  
// app.get('/greetings/:username', (req, res) => {
//     const username = req.params.username;
//     const response = `Hello there, ${username}!`;
//     res.send(response);
// });

// 2. Rolling the Dice

// Route to handle /roll/:number
// app.get('/roll/:number', (req, res) => {
//     // Extract the number parameter from the URL
//     const number = req.params.number;

//     // Check if the parameter is a valid number
//     if (isNaN(number)) {
//         // If not a number, respond with an error message
//         res.status(400).send("You must specify a number.");
//     } else {
//         // If a valid number, generate a random whole number between 0 and the given number
//         const randomNumber = Math.floor(Math.random() * (parseInt(number) + 1));
//         res.send(`You rolled a ${randomNumber}.`);
//     }
// });

// 3. I Want THAT One!

// Data
// const collectibles = [
//     { name: 'shiny ball', price: 5.95 },
//     { name: 'autographed picture of a dog', price: 10 },
//     { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
// ];

// // Route to handle /collectibles/:index
// app.get('/collectibles/:index', (req, res) => {
//     // Extract the index parameter from the URL
//     const index = req.params.index;

//     // Check if the index is within the range of the collectibles
//         // If index is out of range, respond with an error message
//         res.status(404).send("This item is not yet in stock. Check back soon!");
//     } else {
//         // If index is valid, get the collectible at the specified index
//         const collectible = collectibles[index];
//         res.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`);
//     }
// });

// Hello with query parameters
app.get('/hello', (req, res) => {
    // Accessing query parameters from req.query object
    const name = req.query.name;
    const age = req.query.age;

    // Constructing the response message using the query parameters
    res.send(`Hello there, ${name}! I hear you are ${age} years old!`);
});

// 4. Filter Shoes by Query Parameters

// Shoes
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

// Route to handle /shoes with query parameters
app.get('/shoes', (req, res) => {
    let filteredShoes = shoes;

    // Filter by min-price
    if (req.query['min-price']) {
        const minPrice = parseInt(req.query['min-price']);
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }

    // Filter by max-price
    if (req.query['max-price']) {
        const maxPrice = parseInt(req.query['max-price']);
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }

    // Filter by type
    if (req.query.type) {
        const type = req.query.type.toLowerCase();
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }

    // Respond with the filtered list of shoes
    res.json(filteredShoes);
});