import react from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="weather-city">{props.data.city}</h1>
            <FormattedDate date={props.data.date} />
            <div className="weather-app-container">
              <div className="temperature-container">
                <div className="icon">
                  <img src={props.data.iconUrl} alt="sunny" />
                </div>
                <div className="current-temperature">
                  {props.data.temperature}
                </div>
                <div className="weather-degrees">°C</div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="current-weather-details">
              <div className="weather-condition">{props.data.condition}</div>
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
