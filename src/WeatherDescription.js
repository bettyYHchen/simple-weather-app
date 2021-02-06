import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomIcon from './CustomIcon';

export default function WeatherDescription(props) {
  return (
    <div className="WeatherDescription">
      <div className="row">
        <div className="col-4">
          <h3>Sun 15:00</h3>
        </div>
        <div className="col-4">
          <h3>
            <CustomIcon icon={props.weatherDesc}/> {props.weatherDesc}
          </h3>
        </div>
        <div className="col-4">
          <h3>
            <FontAwesomeIcon icon={['fas', 'thermometer-three-quarters']} /> {props.tempLower}&deg;~
            {props.tempUpper}&deg;
          </h3>
        </div>
      </div>
    </div>
  );
}