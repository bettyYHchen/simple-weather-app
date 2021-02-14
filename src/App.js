import React, {useState} from 'react';
import './App.css';
import City from './City';
import WeatherDescription from './WeatherDescription';
import WeatherMeasures from './WeatherMeasures';
import WeatherForecast from './WeatherForecast';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Loader from "react-loader-spinner";


library.add(fas);


function App() {
  const [city, setCity] = useState("Toronto");
  let apiKey = "73eee4c0adad9e9175d692ed1fe44b49";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  const [weatherData, setWeatherData] = useState({
    temperature: 17,
    wind: 4.8,
    humidity: 65,
    tempLower: 7,
    tempUpper: 18,
    weatherDesc: 'Sunny',
    lat: 43.6534817,
    lng: -79.3839347,
    timeOffset: -18000, //the city's UTC Shift in seconds from UTC
    ready: false
  });
  const [celsiusRecords, setCelsiusRecords] = useState({
    temperature: 17,
    tempLower: 7,
    tempUpper: 18
  });
 
  const [weatherForecastData, setWeatherForecastData] = useState({
    weatherDescArray: ['Clear', 'Clear', 'Clear', 'Clear', 'Clear'],
    celciusMinRecords: [9, 12, 4, 2, 1],
    celciusMaxRecords: [18, 19, 18, 9, 10]
  });

  const [celsiusForecastRecords, setCelsiusForecastRecords] = useState({
    celciusMinRecords: [9, 12, 4, 2, 1],
    celciusMaxRecords: [18, 19, 18, 9, 10]
  });

  function convert2Fahrenheit(degree) {
    return Math.round(((degree * 9) / 5) + 32);
  }

  function handleWeatherResponse(response) { 
     setWeatherData({
        temperature: Math.round(response.data.main.temp),
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        tempLower: Math.round(response.data.main.temp_min),
        tempUpper: Math.round(response.data.main.temp_max),
        weatherDesc: response.data.weather[0].main,
        lat: response.data.coord.lat,
        lng: response.data.coord.lon,
        timeOffset: response.data.timezone, //the city's UTC Shift in seconds from UTC
        ready: true
     });
    setCelsiusRecords({
      temperature: Math.round(response.data.main.temp),
      tempLower: Math.round(response.data.main.temp_min),
      tempUpper: Math.round(response.data.main.temp_max)
    });
    
  }

  function handleForecastResponse(response) { 
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
    setCelsiusForecastRecords({
      celciusMinRecords: dummyCelciusMinRecords,
      celciusMaxRecords: dummycelciusMaxRecords
      });
    
  }
 
  function handleUpdate(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handlleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleWeatherResponse);
    let apiForeCastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.lat}&lon=${weatherData.lng}&units=${units}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
    axios.get(apiForeCastUrl).then(handleForecastResponse);
  }

  function selectUnit(event) {
    var dummyCelciusMinRecords = [];
    var dummycelciusMaxRecords = [];
    event.preventDefault();
    if (event.target.value === "fahrenheit") {
      setWeatherData({
        temperature: convert2Fahrenheit(celsiusRecords.temperature),
        wind: weatherData.wind,
        humidity: weatherData.humidity,
        tempLower: convert2Fahrenheit(celsiusRecords.tempLower),
        tempUpper: convert2Fahrenheit(celsiusRecords.tempUpper),
        weatherDesc: weatherData.weatherDesc,
        lat: weatherData.lat,
        lng: weatherData.lng,
        timeOffset: weatherData.timeOffset,
        ready: weatherData.ready
      });
      for (var j = 0; j <= celsiusForecastRecords.celciusMinRecords.length; j++) {
        dummyCelciusMinRecords.push(convert2Fahrenheit(celsiusForecastRecords.celciusMinRecords[j]));
        dummycelciusMaxRecords.push(convert2Fahrenheit(celsiusForecastRecords.celciusMaxRecords[j]));
      }

      setWeatherForecastData({
        weatherDescArray: weatherForecastData.weatherDescArray,
        celciusMinRecords: dummyCelciusMinRecords,
        celciusMaxRecords: dummycelciusMaxRecords
      })

    } else {
       setWeatherData({
         temperature: celsiusRecords.temperature,
         wind: weatherData.wind,
         humidity: weatherData.humidity,
         tempLower: celsiusRecords.tempLower,
         tempUpper: celsiusRecords.tempUpper,
         weatherDesc: weatherData.weatherDesc,
         lat: weatherData.lat,
         lng: weatherData.lng,
         timeOffset: weatherData.timeOffset,
         ready: weatherData.ready
       });
      setWeatherForecastData({
        weatherDescArray: weatherForecastData.weatherDescArray,
        celciusMinRecords: celsiusForecastRecords.celciusMinRecords,
        celciusMaxRecords: celsiusForecastRecords.celciusMaxRecords
      })
    }
    
  }

 
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <div className="row">
                <div className="col-6">
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
                <div className="col-3">
                  <select className="form-select" aria-label="Select unit" defaultValue="celsius" onChange={selectUnit}>
                      <option value="celsius">celsius</option>
                      <option value="fahrenheit">fahrenheit</option>
                  </select>
                </div>
                <div className="col-3">
                  <City city={city}/>
                </div>
              </div>
              <WeatherDescription timeOffset={weatherData.timeOffset} weatherDesc={weatherData.weatherDesc} tempLower={weatherData.tempLower} tempUpper={weatherData.tempUpper} />
              <WeatherMeasures temperature={weatherData.temperature} wind={weatherData.wind} humidity={weatherData.humidity} />
              <WeatherForecast timeOffset={weatherData.timeOffset} weatherDescArray={weatherForecastData.weatherDescArray} celciusMinRecords={weatherForecastData.celciusMinRecords} celciusMaxRecords={weatherForecastData.celciusMaxRecords} />
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
    axios.get(apiUrl).then(handleWeatherResponse);
    let apiForeCastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.lat}&lon=${weatherData.lng}&units=${units}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
    axios.get(apiForeCastUrl).then(handleForecastResponse);
    return ( <Loader
        type="Puff"
        color="#4e89ae"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />);
  }


}

export default App;
