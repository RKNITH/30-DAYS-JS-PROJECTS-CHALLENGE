const heading = document.getElementById('heading');
const result = document.getElementById('result');
const max = document.getElementById('max');
const min = document.getElementById('min');
const info = document.getElementById('info');
const inp = document.getElementById('inp');

const api_key = "33d9c89bd813247536f05eb59ddd5a58";

const currentWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        updateWeather(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const updateWeather = (data) => {
    const temp = data.main.temp - 273.15;
    const temp_max = data.main.temp_max - 273.15;
    const temp_min = data.main.temp_min - 273.15;

    heading.textContent = data.name;
    result.textContent = `${temp.toFixed(2)}°C`;
    max.textContent = `Max: ${temp_max.toFixed(2)}°C`;
    min.textContent = `Min: ${temp_min.toFixed(2)}°C`;
    info.textContent = data.weather[0].description;
};

inp.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const city = inp.value;
        if (city) {
            currentWeather(city);
        } else {
            alert('Please enter a city name');
        }
    }
});
