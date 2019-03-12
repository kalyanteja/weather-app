import React from 'react';

const Weather = props => (
    <div className="weather__info">
        { props.city && props.country &&  <p className="weather_details">Location: {props.city}, {props.country}</p>}
        { props.temperature && <p className="weather_details">Temperature: {props.temperature}</p>}
        { props.humidity && <p className="weather_details">Humidity: {props.humidity}</p>}
        { props.desc && <p className="weather_details">Conditions: {props.desc}</p>}
        { props.error && <p className="weather_error">{ props.error} </p> }
    </div>
);

export default Weather;