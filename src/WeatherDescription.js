import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomIcon from './CustomIcon';
import './WeatherDescription.css';

export default function WeatherDescription(props) {
    function formatMinutes(d) {
      if (d < 10) {
          return "0" + d;
      } else {
          return `${d}`;
      }
      
    }
   function changeTime(offset) {
    // function to calculate local time
    // in a different city
    // given the city's UTC Shift in seconds from UTC

    // create Date object for current location
    let d = new Date();
   
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
   
    // create new Date object for different city
    // using supplied offset
    return new Date(utc + (1000*offset));
  }
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let now = changeTime(props.timeOffset);
  return (
    <div className="WeatherDescription">
      <div className="row">
        <div className="col-4">
          <h4>{days[now.getDay()]} {now.getHours()}:{formatMinutes(now.getMinutes())}</h4>
        </div>
        <div className="col-4">
          <h4>
            <CustomIcon icon={props.weatherDesc}/> {props.weatherDesc}
          </h4>
        </div>
        <div className="col-4">
          <h4>
            <FontAwesomeIcon icon={['fas', 'thermometer-three-quarters']} /> {props.tempLower}&deg;~
            {props.tempUpper}&deg;
          </h4>
        </div>
      </div>
    </div>
  );
}