import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleData(response) {
        setForecast(response.data.daily);
        setReady(true);
    }

    if (ready) {
        console.log(forecast);
        return (
            <div className="Weather-Forecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]} />
                    </div>

                </div>
            </div>
        );
    } else {
        const apiKey = "d1a86552de255334f6117b348c4519bd";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = ` https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleData);

        return null;
    }

}