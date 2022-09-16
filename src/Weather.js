import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response) {
        console.log(response.data)
        setWeatherData({
            temperature: response.data.main.temp,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        })

    }

    const apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=San Jose&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);


    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="enter a city..." className="form-control" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <div className="row">
                <h1>{weatherData.city}</h1>
                <ul className="daily-info">
                    <li> <FormattedDate date={weatherData.date} /></li>
                    <li className="text-capitalize"> {weatherData.description}</li>
                </ul>
            </div>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Cloudy" />
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="units">°C | °F </span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>humidity: {weatherData.humidity} %</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}