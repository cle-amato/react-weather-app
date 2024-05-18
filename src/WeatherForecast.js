import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
    console.log(response);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecastData[2]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ca0094f431ob9cbfef2ed6ce95bt0cc7";
    let city = props.city;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
