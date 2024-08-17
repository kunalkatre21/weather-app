require('dotenv').config();
const apiKey = process.env.OPENWEATHERMAP_API_KEY;
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('API response:', data);
        if (response.ok) {
            displayWeather(data);
        } else {
            throw new Error(data.message || 'Failed to fetch weather data');
        }
    } catch (error) {
        console.error('Error:', error);
        weatherInfo.innerHTML = `An error occurred: ${error.message}`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Feels like: ${main.feels_like}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Weather: ${weather[0].description}</p>
    `;
}