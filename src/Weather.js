import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });

    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input 
                            type="search" 
                            placeholder="enter a city..." 
                            className="form-control"
                             />
                        </div>
                        <div className="col-3">
                            <input 
                            type="submit" 
                            value="Search" 
                            className="btn btn-primary"
                             />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
            </div>
        )
    } else {
        const apiKey = "d1a86552de255334f6117b348c4519bd";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=San Jose&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);


        return "loading...";
    }

}