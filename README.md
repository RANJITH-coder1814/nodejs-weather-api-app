# nodejs-weather-api-app
A simple Weather API application built with Node.js and Express that fetches real-time weather data using OpenWeather API.
# 🌦️ Node.js Weather API App

A simple and beginner-friendly **Weather API Application** built using **Node.js** and **Express**.
This app fetches real-time weather data from the OpenWeather API and displays temperature, humidity, and weather conditions.

---

## 🚀 Features

✔ Get real-time weather by city name
✔ REST API built with Express
✔ JSON response
✔ Environment variable support (.env)
✔ Beginner-friendly project structure

---

## 🛠️ Technologies Used

* 🟢 Node.js
* 🚀 Express.js
* 🌐 OpenWeather API
* 📦 dotenv

---

## 📂 Project Structure

```
nodejs-weather-api-app/
│── server.js
│── package.json
│── .env
│── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/nodejs-weather-api-app.git
cd nodejs-weather-api-app
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Create .env File

```
API_KEY=your_openweather_api_key
PORT=3000
```

### 4️⃣ Run the Server

```
node server.js
```

Server will start at:

```
http://localhost:3000
```

---

## 🌍 API Endpoint

### Get Weather by City

```
GET /weather/:city
```

Example:

```
http://localhost:3000/weather/London
```

---

## 📸 Sample JSON Response

```
{
  "city": "London",
  "temperature": "18°C",
  "humidity": "72%",
  "condition": "Cloudy"
}
```

---

## 🎯 Future Improvements

* Add frontend UI
* Add 5-day forecast
* Add country filter
* Deploy on Render / Railway
* Add caching

---

## 👨‍💻 Author

Ranjith

---

⭐ If you like this project, don’t forget to star the repository!
