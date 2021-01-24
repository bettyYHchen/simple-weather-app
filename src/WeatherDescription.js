import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function WeatherDescription() {
  return (
    <div className="WeatherDescription">
      <div className="row">
        <div className="col-4">
          <h3>Sun 15:00</h3>
        </div>
        <div className="col-4">
          <h3>
           <FontAwesomeIcon icon={['fas', 'sun']} /> Sunny
          </h3>
        </div>
        <div className="col-4">
          <h3>
            <FontAwesomeIcon icon={['fas', 'thermometer-three-quarters']} /> 7&deg; -
            18&deg;
          </h3>
        </div>
      </div>
    </div>
  );
}