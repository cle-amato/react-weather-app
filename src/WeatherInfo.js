import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="weather-city">{props.data.city}</h1>
      <div className="container">
        <div className="row">
          <div className="col-6 current-date-temp">
            <FormattedDate date={props.data.date} />
            <div className="weather-app-container">
              <div className="temperature-container">
                <div className="WeatherIcon">
                  <WeatherIcon condition={props.data.icon} />
                </div>
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="current-weather-details">
              <div className="weather-condition text-capitalize">
                {props.data.description}
              </div>
              <div>
                Feels like: <span>{props.data.feelsLike}</span>°
              </div>
              <div>
                Wind speed: <span>{props.data.wind}</span> km/h
              </div>
              <div>
                Humidity: <span>{props.data.humidity}</span>%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
