import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="current-temperature">{props.celsius}</span>
        <span className="weather-degrees">
          <span> °C </span> |{" "}
          <span>
            <a href="/" onClick={showFahrenheit}>
              F°
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    let fahrenheitTemperature = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="WeatherTemperature">
        <span className="current-temperature">{fahrenheitTemperature}</span>
        <span className="weather-degrees">
          <span>
            <a href="/" onClick={showCelsius}>
              °C{" "}
            </a>
          </span>{" "}
          | <span>F°</span>
        </span>
      </div>
    );
  }
}
