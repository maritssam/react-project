import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css"

export default function WeatherForecastDay(props) {

    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max)
        return `${temperature}°`;
    }
    function minTemperature() {
        let temperature = Math.round(props.data.temp.min)
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = [
            "Sun",
            "Mon",
            "Tues",
            "Wed",
            "Thur",
            "Fri",
            "Sat",
        ]

        return days[day];
    }

    return (
        <div>
            <div className="WeatherForecast-day">
                {day()}
            </div>
            <WeatherIcon code={props.data.weather[0].icon} size={34} />
            <div className="WeatherForecast-temperature">
                <span className="WeatherForecast-max">{maxTemperature()}</span>
                <span className="WeatherForecast-min">{minTemperature()}</span>
            </div>
        </div>
    );
}