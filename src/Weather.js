import React, { useState, useEffect } from "react";
import ShowingCard from "./ShowingCard";

const Weather = () => {
  const [location, setlocation] = useState("guwahati");
  const [alldata, setalldata] = useState({});

  const getWeatherData = async () => {
    try {
      let URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b73cfc289e97fbf3ff27d4c3060727b0`;

      const res = await fetch(URL);
      const data = await res.json();

      //   data destrucring
      const { temp, humidity, pressure } = data.main;
      const { main: mood } = data.weather[0];
      const { name } = data;
      const { country, sunset } = data.sys;
      const { speed } = data.wind;

      const allData = {
        temp,
        humidity,
        pressure,
        mood,
        name,
        country,
        sunset,
        speed,
      };
      setalldata(allData);

      console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="container">
      <h4 className="text-center fw-bold my-5">
        Weather App using OpenWeatherAPI
      </h4>
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-center ">
          <div className="form-outline">
            <input
              type="search"
              id="searchQuery"
              className="form-control"
              placeholder="Search For City Name"
              aria-label="Search"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
            />
            <label className="form-label" htmlFor="searchQuery" />
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill"
            onClick={getWeatherData}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* show weather section */}
      <ShowingCard data={alldata} />
    </div>
  );
};

export default Weather;
