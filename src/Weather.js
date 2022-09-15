import React from "react";
import "./Weather.css";

export default function Weather() {
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
                <h1> San Jose</h1>
                <ul>
                    <li>Thursday 4:30</li>
                    <li>Partly Cloudy</li>
                </ul>
            </div>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Cloudy" />
                    72 °C | °F
                </div>
                <div className="col-6">
                    <ul>
                        <li>humidity: %</li>
                        <li>Wind: km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}