const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Load environment variables from a .env file

const app = express();
const port = 3000;

app.use(express.json());

app.get((req, res) => {
    const city = req.params.city;
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
        .get(apiUrl)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});