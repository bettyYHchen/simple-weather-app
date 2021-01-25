import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

export default function WeatherDescription() {
  const [tempLower, setTempLower] = useState(null);
  const [tempUpper, setTempUpper] = useState(null);
  const [weatherDesc, setWeatherDesc] = useState(null);
  let city = "Toronto";
  let apiKey = "73eee4c0adad9e9175d692ed1fe44b49";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(function (response) {
    setTempLower(Math.round(response.data.main.temp_min));
    setTempUpper(Math.round(response.data.main.temp_max));
    setWeatherDesc(response.data.weather[0].main);
   });
  return (
    <div className="WeatherDescription">
      <div className="row">
        <div className="col-4">
          <h3>Sun 15:00</h3>
        </div>
        <div className="col-4">
          <h3>
            <FontAwesomeIcon icon={['fas', 'sun']} /> {weatherDesc}
          </h3>
        </div>
        <div className="col-4">
          <h3>
            <FontAwesomeIcon icon={['fas', 'thermometer-three-quarters']} /> {tempLower}&deg;~
            {tempUpper}&deg;
          </h3>
        </div>
      </div>
    </div>
  );
}