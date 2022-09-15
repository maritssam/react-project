import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
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