import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WeatherMeasures(props) {
    
    return (
        <div className="WeatherMeasures">
        <div className="row">
            <div className="col-1"></div>
            <div className="col-5">
                    <div className="large">{props.temperature}&deg;</div>
            </div>
            <div className="col-6">
            <br />
            <h2>
                        <FontAwesomeIcon icon={['fas', 'wind']} /> {props.wind}km/h
            </h2>
            <h2>
                        <FontAwesomeIcon icon={['fas', 'tint']} /> {props.humidity}%
            </h2>
            </div>
        </div>
        </div>
    );
}