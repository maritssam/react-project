import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const apiKey = "d1a86552de255334f6117b348c4519bd";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    console.log(props.coordinates)

    return (
        <div className="Weather-Forecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                        Mon
                    </div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-max"> 75°</span>
                        <span className="WeatherForecast-min"> 58°</span>
                    </div>
                </div>

            </div>
        </div>
    );
}