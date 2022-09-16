import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    }

    if (unit === "celsius") {
        return (
            <span className="WeatherTemperature">
                <span className="temperature">
                    {Math.round(props.celsius)}
                </span>
                <span className="units">
                    {" "} °C
                    |
                    <a href="/" onClick={showFahrenheit}> °F</a>
                </span>
            </span>
        );
    } else {
        return (
            <span className="WeatherTemperature">
                <span className="temperature">
                    {Math.round(fahrenheit())}
                </span>
                <span className="units">
                    <a href="/" onClick={showCelsius}>°C </a>
                    | °F
                </span>
            </span>
        )
    }
}