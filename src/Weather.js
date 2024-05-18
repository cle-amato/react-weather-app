import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "ca0094f431ob9cbfef2ed6ce95bt0cc7";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      wind: Math.round(response.data.wind.speed * 3.6),
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              required
              className="search-form-input"
              onChange={handleCityChange}
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
            />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
