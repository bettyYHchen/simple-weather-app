import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CustomIcon(props) {
    if (props.icon === 'Thunderstorm') {
        return (
            <FontAwesomeIcon icon={['fas', 'bolt']} />
        );
    } else if (props.icon === 'Drizzle') { 
        return (
            <FontAwesomeIcon icon={['fas', 'cloud-rain']} />
        );
    } else if (props.icon === 'Rain') { 
        return (
            <FontAwesomeIcon icon={['fas', 'cloud-showers-heavy']} />
        );
    } else if (props.icon === 'Snow') { 
        return (
            <FontAwesomeIcon icon={['fas', 'snowflake']} />
        );
    } else if (props.icon === 'Clear') { 
        return (
            <FontAwesomeIcon icon={['fas', 'sun']} />
        );
    } else if (props.icon === 'Clouds') { 
        return (
            <FontAwesomeIcon icon={['fas', 'cloud']} />
        );
    } else {
        return (
            <FontAwesomeIcon icon={['fas', 'smog']} />
        );
    }


  
}