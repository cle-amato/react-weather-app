import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;
  }

  function maxTemperature() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}°`;
  }

  function forecastDate() {
    let forecastDate = new Date(props.data.time * 1000);
    let day = forecastDate.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{forecastDate()}</div>
      <WeatherIcon condition={props.data.condition.icon} size={35} />
      <span className="temperature-max">{maxTemperature()}</span>
      <span className="temperature-min">{minTemperature()}</span>
    </div>
  );
}
