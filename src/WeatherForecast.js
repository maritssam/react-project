import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(function () {
        setReady(false);
    }, [props.coordinates]);

    function handleData(response) {
        setForecast(response.data.daily);
        setReady(true);
    }

    if (ready) {
        return (
            <div className="Weather-Forecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 7)
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                    })}
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