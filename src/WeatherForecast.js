import React from "react";
import CustomIcon from './CustomIcon';

export default function WeatherForecast(props) {
  let weatherDescArray = props.weatherDescArray;
  let celciusMinRecords = props.celciusMinRecords;
  let celciusMaxRecords = props.celciusMaxRecords;
  let forecastDays = [];
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
  let now = changeTime(props.timeOffset);
  //Change the day display in the forecast according to current day
  let daysAbbrev = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var i;
  for (i = 1; i < 6; i++) {
    forecastDays.push(daysAbbrev[(now.getDay() + i) % 7]);
   }
  return (
    <div className='WeatherForecast'>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2">
          <h5>{forecastDays[0]}</h5>
          <h5>
            <CustomIcon icon={weatherDescArray[0]}/>
          </h5>
          <h6>{celciusMinRecords[0]}&deg;~{celciusMaxRecords[0]}&deg;</h6>
        </div>
        <div className="col-2">
          <h5>{forecastDays[1]}</h5>
          <h5>
            <CustomIcon icon={weatherDescArray[1]}/>
          </h5>
          <h6>{celciusMinRecords[1]}&deg;~{celciusMaxRecords[1]}&deg;</h6>
        </div>
        <div className="col-2">
          <h5>{forecastDays[2]}</h5>
          <h5>
            <CustomIcon icon={weatherDescArray[2]}/>
          </h5>
          <h6>{celciusMinRecords[2]}&deg;~{celciusMaxRecords[2]}&deg;</h6>
        </div>
        <div className="col-2">
          <h5>{forecastDays[3]}</h5>
          <h5>
            <CustomIcon icon={weatherDescArray[3]}/>
          </h5>
          <h6>{celciusMinRecords[3]}&deg;~{celciusMaxRecords[3]}&deg;</h6>
        </div>
        <div className="col-2">
          <h5>{forecastDays[4]}</h5>
          <h5>
            <CustomIcon icon={weatherDescArray[4]}/>
          </h5>
          <h6>{celciusMinRecords[4]}&deg;~{celciusMaxRecords[4]}&deg;</h6>
        </div>
      </div>
    </div>
  );
}