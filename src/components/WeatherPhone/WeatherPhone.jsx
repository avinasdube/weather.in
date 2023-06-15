import React, { useContext } from 'react';
import './WeatherPhone.scss';
import { ModeContext } from '../../context/ModeContext';
import location from '../../assets/icons/location.png';
import { UseWeatherContext } from '../../context/WeatherContext';

const WeatherPhone = () => {

    const { theme } = useContext(ModeContext);

    // GETTING CURRENT DATE AND TIME

    const currentDate = new Date();
    const currentDateToday = currentDate.getDate();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = months[currentDate.getMonth()];

    // GETTING CURRENT DATA OF SELECTED CITY THROUGH API CALLED CONTEXT FILE

    const { state: { current, city } } = UseWeatherContext();

    return (
        <>
            {
                current ?

                    <div className={`weatherPhoneCard-light ${theme === 'light' ? 'weatherPhoneCard-light' : 'weatherPhoneCard-dark'}`} id='wthrcrd'>
                        <div className='cardHead'>
                            <div className='location'>
                                <img src={location} alt='' id='lctn'></img>
                                <div className='cityname' id='ctnme'>
                                    {city.city}
                                </div>
                            </div>
                        </div>
                        <div className='cardMid'>
                            <div className='image'>
                                <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt='' id='wthrimg'></img>
                            </div>
                            <div className='dateToday' id='dtdy'>
                                Today, {currentDateToday} {currentMonth}
                            </div>
                            <div className='temp' id='tmptdy'>
                                {current.main.temp}° C
                            </div>
                            <div className='remarks' id='rmrks'>
                                {current.weather[0].main}
                            </div>
                        </div>
                        <div className='cardFoot'>
                            <div className='extraDetails' id='extrdtls'>
                                <label>Pressure</label>
                                <p>{current.main.pressure}mb</p>
                            </div>
                            <div className='extraDetails' id='extrdtls'>
                                <label>Humidity</label>
                                <p>{current.main.humidity}%</p>
                            </div>
                            <div className='extraDetails' id='extrdtls'>
                                <label>Wind Speed</label>
                                <p>{current.wind.speed} Km/h</p>
                            </div>
                            <div className='extraDetails' id='extrdtls'>
                                <label>Temp Max.</label>
                                <p>{current.main.temp_max}° C</p>
                            </div>
                            <div className='extraDetails' id='extrdtls'>
                                <label>Visibility</label>
                                <p>{current.visibility/1000} KM</p>
                            </div>
                        </div>
                    </div>

                    : ''
            }
        </>
    )
}

export default WeatherPhone