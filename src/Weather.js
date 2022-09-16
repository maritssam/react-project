import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response) {
        setWeatherData({
            temperature: response.data.main.temp,
            city: response.data.name,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        })

    }



    const apiKey = "41653189222a9f622e0f370d2ef32efe";
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
                    <li>Thursday 4:30</li>
                    <li className="text-capitalize">{weatherData.description}</li>
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