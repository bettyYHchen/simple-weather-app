import React from 'react';

export default function WeatherDescription() {
  return (
    <div className="WeatherDescription">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4">
          <h3>
            <i className="fas fa-sun"></i> Sunny
          </h3>
        </div>
        <div className="col-4">
          <h3>
            <i className="fas fa-thermometer-three-quarters"></i> 7&deg; -
            18&deg;
          </h3>
        </div>
      </div>
    </div>
  );
}