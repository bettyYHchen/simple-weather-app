import React from 'react';
import './App.css';
import City from './City';
import Search from './Search';
import WeatherDescription from './WeatherDescription';
import WeatherMeasures from './WeatherMeasures';
import WeatherForecast from './WeatherForecast';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas);


function App() {
   return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="row">
              <div className="col-8">
                <Search />
              </div>
              <div className="col-4">
                <City />
              </div>
            </div>
            <WeatherDescription />
            <WeatherMeasures />
            <WeatherForecast />
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
}

export default App;
