import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    if (city) {
      setIsloading(true);
      axios
        .get(`https://api.weatherapi.com/v1/current.json`, {
          params: {
            key: "5ad82e4dcba742bc9cf54440231012",
            q: city,
          },
        })
        .then((res) => setWeatherData(res.data))
        .catch((e) =>{console.log("Error fetching data");
            alert("Failed to fetch weather data");
        })
        .finally(()=>{
            setIsloading(false);
        });

    }
  }, [city]);
  return <div>
    <div className="weather-display">
        {isLoading && <p>Loading data...</p>}
        {!isLoading && weatherData && 
        <div className="weather-cards">
            <WeatherCard title="Temperature" data={`${weatherData.current.temp_c}&deg;C`}/>
            <WeatherCard title="Humidity" data={`${weatherData.current.humidity}%`}/>
            <WeatherCard title="Condition" data={weatherData.current.condition.text}/>
            <WeatherCard title="Wind Speed" data={`${weatherData.current.wind_kph} kph`}/>
        </div>}
    </div>
  </div>;
};

export default WeatherDisplay;
