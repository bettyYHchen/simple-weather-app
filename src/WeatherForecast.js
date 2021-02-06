import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WeatherForecast(props) {
  // let weatherDescArray = props.weatherDescArray;
  let celciusMinRecords = props.celciusMinRecords;
  let celciusMaxRecords = props.celciusMaxRecords;
  return (
    <div className='WeatherForecast'>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2">
          <h5>Mon</h5>
          <h5>
            <FontAwesomeIcon icon={['fas', 'sun']}/>
          </h5>
          <h6>{celciusMinRecords[0]}&deg;~{celciusMaxRecords[0]}&deg;</h6>
        </div>
        <div className="col-2">
          <h5>Tue</h5>
          <h5>
            <FontAwesomeIcon icon={['fas', 'sun']}/>
          </h5>
          <h6>{celciusMinRecords[1]}&deg;~{celciusMaxRecords[1]}&deg;</h6>
        </div>
        <div className="col-2">
          <h5>Wed</h5>
          <h5>
            <FontAwesomeIcon icon={['fas', 'sun']}/>
          </h5>
          <h6>{celciusMinRecords[2]}&deg;~{celciusMaxRecords[2]}&deg;</h6>
        </div>
        <div className="col-2">
          <h5>Thu</h5>
          <h5>
            <FontAwesomeIcon icon={['fas', 'sun']}/>
          </h5>
          <h6>{celciusMinRecords[3]}&deg;~{celciusMaxRecords[3]}&deg;</h6>
        </div>
        <div className="col-2">
          <h5>Fri</h5>
          <h5>
            <FontAwesomeIcon icon={['fas', 'sun']}/>
          </h5>
          <h6>{celciusMinRecords[4]}&deg;~{celciusMaxRecords[4]}&deg;</h6>
        </div>
      </div>
    </div>
  );
}
