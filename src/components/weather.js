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
                <p>Местоположение: {city}, {country}</p>
                <p>Температура: {temp}</p>
                <p>Давление: {pressure}</p>
                <p>Заход солнца: {sunset}</p>
            </div>
        }
        <p className='error'>{error}</p>
    </div>
);

export default Weather;