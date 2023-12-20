const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const city = 'London'; // Replace with the desired city

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Use the fetched weather data to display on the dashboard
    })
    .catch(error => console.error(error));