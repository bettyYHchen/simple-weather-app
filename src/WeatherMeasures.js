import React from 'react';

export default function WeatherMeasures() {
  return (
    <div className="WeatherMeasures">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5">
          <div className="large">17&deg;</div>
        </div>
        <div className="col-6">
          <br />
          <h2>
            <i className="fas fa-wind"></i> 4.8km/h
          </h2>
          <h2>
            <i className="fas fa-tint"></i> 65%
          </h2>
        </div>
      </div>
    </div>
  );
}