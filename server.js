const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

// Home Route
app.get("/", (req, res) => {
    res.send("🌦️ Weather API App is Running!");
});

// Weather Route
app.get("/weather/:city", async (req, res) => {
    const city = req.params.city;

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await axios.get(url);
        const data = response.data;

        res.json({
            city: data.name,
            temperature: data.main.temp + "°C",
            humidity: data.main.humidity + "%",
            condition: data.weather[0].description
        });

    } catch (error) {
        res.status(500).json({
            error: "City not found or API error"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
