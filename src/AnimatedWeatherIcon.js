import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function AnimatedWeatherIcon(props) {
    if (props.icon === 'Thunderstorm') {
        return (
            <ReactAnimatedWeather
            icon='WIND'
            color='#4e89ae'
            size= {props.iconSize}
            animate={true}
  />
        );
    } else if (props.icon === 'Drizzle') { 
        return (
            <ReactAnimatedWeather
            icon='RAIN'
            color='#4e89ae'
            size= {props.iconSize}
            animate={true}
  />
        );
    } else if (props.icon === 'Rain') { 
        return (
            <ReactAnimatedWeather
            icon='SLEET'
            color='#4e89ae'
            size= {props.iconSize}
            animate={true}
  />
        );
    } else if (props.icon === 'Snow') { 
        return (
            <ReactAnimatedWeather
            icon='SNOW'
            color='#4e89ae'
            size= {props.iconSize}
            animate={true}
  />
        );
    } else if (props.icon === 'Clear') { 
        return (
            <ReactAnimatedWeather
            icon='CLEAR_DAY'
            color='#4e89ae'
            size= {props.iconSize}
            animate={true}
  />
        );
    } else if (props.icon === 'Clouds') { 
        return (
             <ReactAnimatedWeather
            icon='CLOUDY'
            color='#4e89ae'
            size= {props.iconSize}
            animate={true}
  />
        );
    } else {
        return (
            <ReactAnimatedWeather
            icon='FOG'
            color='#4e89ae'
            size= {props.iconSize}
            animate={true}
  />
        );
    }


  
}