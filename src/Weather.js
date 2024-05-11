import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response);
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
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="weather-city">{weatherData.city}</h1>
              <FormattedDate date={weatherData.date} />
              <div className="weather-app-container">
                <div className="temperature-container">
                  <div className="icon">
                    <img src={weatherData.iconUrl} alt="sunny" />
                  </div>
                  <div className="current-temperature">
                    {weatherData.temperature}
                  </div>
                  <div className="weather-degrees">°C</div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="current-weather-details">
                <div className="weather-condition">{weatherData.condition}</div>
                <div>
                  Feels like: <span>{weatherData.feelsLike}</span>°
                </div>
                <div>
                  Wind speed: <span>{weatherData.wind}</span> km/h
                </div>
                <div>
                  Humidity: <span>{weatherData.humidity}</span>%
                </div>
              </div>
            </div>
          </div>
        </div>
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
