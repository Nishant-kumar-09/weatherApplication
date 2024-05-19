// const apiKey = 'YOUR_API_KEY'; // Replace with your API key
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// async function searchWeather() {
//     const city = document.getElementById('searchInput').value;

//     try {
//         const response = await fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`);
//         const data = await response.json();

//         displayWeather(data);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// function displayWeather(data) {
//     document.getElementById('city').innerText = data.name;
//     document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
//     document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
//     document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
//     document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
// }




  const weatherContainer = document.querySelector('.weather-container');
  const locationElement = document.querySelector('.location');
  const temperatureElement = document.querySelector('.temperature');
  const conditionsElement = document.querySelector('.conditions');

  const apiKey = '0999b431807982ae652c0f9dc6d1febf'; 
  const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  async function fetchWeatherData(city) {
    const apiUrl = `${apiBaseUrl}?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      displayWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      locationElement.textContent = 'Error fetching data';
      temperatureElement.textContent = '';
      conditionsElement.textContent = '';
    }
  }

  function displayWeatherData(data) {
    locationElement.textContent = data.name;
    temperatureElement.textContent = `${data.main.temp}°C`;
    conditionsElement.textContent = data.weather[0].description;
  }


  document.getElementById('fetchWeatherBtn').addEventListener('click', () => {
    const userCity = document.getElementById('cityInput').value;
    if (userCity) {
      fetchWeatherData(userCity);
    } else {
      locationElement.textContent = 'City not provided';
      temperatureElement.textContent = '';
      conditionsElement.textContent = '';
    }
  });