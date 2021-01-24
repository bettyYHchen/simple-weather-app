import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <FontAwesomeIcon icon={['fas', 'wind']} /> 4.8km/h
          </h2>
          <h2>
             <FontAwesomeIcon icon={ ['fas','tint']} /> 65%
          </h2>
        </div>
      </div>
    </div>
  );
}