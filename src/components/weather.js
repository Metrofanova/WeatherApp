import React from "react";

const Weather = ({
    city,
    country,
    temp,
    pressure,
    sunset,
    error,
}) => (
    <div className='infoWeath'>
        { city &&
            <div>
                <p>Location: {city}, {country}</p>
                <p>Temperature: {temp}</p>
                <p>Pressure: {pressure}</p>
                <p>Sunset: {sunset}</p>
            </div>
        }
        <p className='error'>{error}</p>
    </div>
);

export default Weather;