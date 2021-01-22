import React from "react";

export default function WeatherForecast() {
  return (
    <div className='WeatherForecast'>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2">
          <h5>Mon</h5>
          <h5>
            <i className="fas fa-sun"></i>
          </h5>
          <h5>9&deg;-18&deg;</h5>
        </div>
        <div className="col-2">
          <h5>Tue</h5>
          <h5>
            <i className="fas fa-cloud"></i>
          </h5>
          <h5>12&deg;-19&deg;</h5>
        </div>
        <div className="col-2">
          <h5>Wed</h5>
          <h5>
            <i className="fas fa-cloud"></i>
          </h5>
          <h5>4&deg;-18&deg;</h5>
        </div>
        <div className="col-2">
          <h5>Thu</h5>
          <h5>
            <i className="fas fa-cloud-sun"></i>
          </h5>
          <h5>2&deg;-9&deg;</h5>
        </div>
        <div className="col-2">
          <h5>Fri</h5>
          <h5>
            <i className="fas fa-cloud"></i>
          </h5>
          <h5>1&deg;-10&deg;</h5>
        </div>
      </div>
    </div>
  );
}
