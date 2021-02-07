import React, {useState} from 'react';
import './App.css';
import City from './City';
import WeatherDescription from './WeatherDescription';
import WeatherMeasures from './WeatherMeasures';
import WeatherForecast from './WeatherForecast';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


library.add(fas);


function App() {
  const [city, setCity] = useState("Toronto");
  const [counter, setCounter] = useState(0);
  let apiKey = "b080b8905111b5961bd5728fb12cf00d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  const [weatherData, setWeatherData] = useState({
    temperature: 17,
    wind: 4.8,
    humidity: 65,
    tempLower: 7,
    tempUpper: 18,
    weatherDesc: 'Sunny',
    timeOffset: -18000, //the city's UTC Shift in seconds from UTC
    ready: false
  });
  const [location, setLocation] = useState({
    lat: 43.6534817,
    lng: -79.3839347,
    timeOffset: -18000
  })
  const [weatherForecastData, setWeatherForecastData] = useState({
    weatherDescArray: ['Clear', 'Clear', 'Clear', 'Clear', 'Clear'],
    celciusMinRecords: [9, 12, 4, 2, 1],
    celciusMaxRecords: [18, 19, 18, 9, 10]
  });
  function updateResults() { 
    let apiLocationUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=c283b937343445819c70964fa093c1cb`;
      axios.get(apiLocationUrl).then(function (response) {
      setLocation({
        lat: response.data.results[0].geometry.lat,
        lng: response.data.results[0].geometry.lng,
        timeOffset: response.data.results[0].annotations.timezone.offset_sec
      });
      })
    let apiForeCastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&units=${units}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
    axios.get(apiForeCastUrl).then(function (response) {
      var dummyWeatherDescArray = [];
      var dummyCelciusMinRecords = [];
      var dummycelciusMaxRecords = [];
      var i;
      for (i = 0; i < 5; i++) {
          dummyWeatherDescArray.push(response.data.daily[i + 1].weather[0].main);
          dummyCelciusMinRecords.push(Math.round(response.data.daily[i + 1].temp.min));
          dummycelciusMaxRecords.push(Math.round(response.data.daily[i + 1].temp.max));
      }
      setWeatherForecastData({
        weatherDescArray: dummyWeatherDescArray,
        celciusMinRecords: dummyCelciusMinRecords,
        celciusMaxRecords: dummycelciusMaxRecords
      });
      setCounter(counter + 1);
    });
    axios.get(apiUrl).then(function (response) {
      setWeatherData({
        temperature: Math.round(response.data.main.temp),
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        tempLower: Math.round(response.data.main.temp_min),
        tempUpper: Math.round(response.data.main.temp_max),
        weatherDesc: response.data.weather[0].main,
        timeOffset: response.data.timezone, //the city's UTC Shift in seconds from UTC
        ready: true
      });
    });
    
    console.log(counter);
  }
 
  function handleUpdate(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handlleSubmit(event) {
    event.preventDefault();
    updateResults();
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <div className="row">
                <div className="col-8">
                  <div className="SearchForm">
                    <form onSubmit={handlleSubmit}>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-8 form-input">
                            <input
                              type="search"
                              className="form-control shadow-sm"
                              placeholder="Enter the City"
                              onChange={handleUpdate}
                              autoFocus="on"
                            />
                          </div>
                          <div className="col-4 form-button">
                            <input type="submit" className="btn btn-light" value="search" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-4">
                  <City city={city}/>
                </div>
              </div>
              <WeatherDescription timeOffset={weatherData.timeOffset} weatherDesc={weatherData.weatherDesc} tempLower={weatherData.tempLower} tempUpper={ weatherData.tempUpper}/>
              <WeatherMeasures temperature={weatherData.temperature} wind={weatherData.wind} humidity={ weatherData.humidity}/>
              <WeatherForecast timeOffset={weatherData.timeOffset} weatherDescArray={weatherForecastData.weatherDescArray} celciusMinRecords={weatherForecastData.celciusMinRecords} celciusMaxRecords={ weatherForecastData.celciusMaxRecords}/>
            </div>
            <div className="footer">
              <small>
                <a href="https://github.com/bettyYHchen/simple-weather-app">
                  Open-souce code{" "}
                </a>
               by Betty Chen
            </small>
            </div>
          </div>
        </div>
         </div>
    );
  } else { 
    updateResults();
    return (<h2>Loading...</h2>);
  }


}

export default App;
