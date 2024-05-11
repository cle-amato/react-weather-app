import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      wind: Math.round(response.data.wind.speed * 3.6),
      humidity: response.data.temperature.humidity,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
      city: "Rome",
      date: new Date(response.data.time * 1000),
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="Search">
          <form>
            <input
              type="search"
              placeholder="Enter a city"
              required
              className="search-form-input"
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
            />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "ca0094f431ob9cbfef2ed6ce95bt0cc7";
    let city = "Rome";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
