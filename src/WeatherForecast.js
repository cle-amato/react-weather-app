import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Wed</div>
          <WeatherIcon condition="clear-sky-day" size={35} />
          <span className="temperature-max">25°</span>
          <span className="temperature-min">19°</span>
        </div>
      </div>
    </div>
  );
}
