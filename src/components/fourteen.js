import React, { useEffect, useState } from 'react';

function Fourteen() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = '26406b8bd3c707d41fae92df1e070736'; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ apiKey}`)
                        .then(response => response.json())
                        .then(data => setWeather(data))
                        .catch(err => setError(err.message));
                },
                (err) => {
                    setError(err.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, [apiKey]);

    return (
        <div>
            <h1>Weather App</h1>
            {error && <p>Error: {error}</p>}
            {weather ? (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main ? weather.main.temp : 'N/A'}°C</p>
                    <p>Weather: {weather.weather && weather.weather[0] ? weather.weather[0].description : 'N/A'}</p>
                    <p>Humidity: {weather.main ? weather.main.humidity : 'N/A'}%</p>
                    <p>Wind Speed: {weather.wind ? weather.wind.speed : 'N/A'} m/s</p>
                </div>
            ) : (
                !error && <p>Loading...</p>
            )}
        </div>
    );
}

export default Fourteen;
