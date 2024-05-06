import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Rome",
    currentDayTime: "Sunday, 7 April, 14:42",
    currentTemperature: "24",
    condition: "clear sky",
    feelsLike: "23",
    windSpeed: "8",
    humidity: "80%",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="weather-city">{weatherData.city}</h1>
            <p>{weatherData.currentDayTime}</p>
            <div className="weather-app-container">
              <div className="temperature-container">
                <div className="icon">
                  <img src={weatherData.imgUrl} alt="sunny" />
                </div>
                <div className="current-temperature">
                  {weatherData.currentTemperature}
                </div>
                <div className="weather-degrees">°C</div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="current-weather-details">
              <div className="weather-condition">{weatherData.condition}</div>
              <div>
                Feels like <span>{weatherData.feelsLike}</span>°
              </div>
              <div>
                Wind speed: <span>{weatherData.windSpeed}</span> km/h
              </div>
              <div>
                Humidity: <span>{weatherData.humidity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
