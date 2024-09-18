import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
   
  return (  
  <div className="Weather">
    <form>
        <div className="row">
            <div className="col-9">
        <input 
        type="search" 
        placeholder="Search city..."
        className="form-control"
        />
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </div>
    </form>
    <h1>Maryland</h1>
    <ul>
        <li>Friday 12:55</li>
        <li>Mostly Cloudy</li>
    </ul>
    <div className="row">
        <div className="col-6">
          <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Monday"
          /> 
            70°
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: 80%</li>
                <li>Wind: 30 mph</li>
            </ul>
        </div>
    </div>
    </div>
  );
}
