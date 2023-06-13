import React, { useContext } from 'react';
import './WeatherPhone.scss';
import rain from '../../assets/images/rain.png';
import { ModeContext } from '../../context/ModeContext';
import location from '../../assets/icons/location.png';

const WeatherPhone = () => {

    const {theme} = useContext(ModeContext);
    
    // GETTING CURRENT DATE AND TIME

    const currentDate = new Date();
    const currentDateToday = currentDate.getDate();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = months[currentDate.getMonth()];

  return (
    <div className={`weatherPhoneCard-light ${theme === 'light' ? 'weatherPhoneCard-light' : 'weatherPhoneCard-dark'}`}>
        <div className='cardHead'>
            <div className='location'>
                <img src={location} alt='' id='lctn'></img>
                <div className='cityname'>Patna</div>
            </div>
        </div>
        <div className='cardMid'>
            <div className='image'>
                <img src={rain} alt=''></img>
            </div>
            <div className='dateToday'>
                Today, {currentDateToday} {currentMonth}
            </div>
            <div className='temp'>
                38 C
            </div>
            <div className='remarks'>
                Rainy
            </div>
        </div>
        <div className='cardFoot'>
            <div className='extraDetails'>
                <label>UV Index</label>
                <p>9 (Very High)</p>
            </div>
            <div className='extraDetails'>
                <label>Humidity</label>
                <p>60%</p>
            </div>
            <div className='extraDetails'>
                <label>Wind</label>
                <p>5 Km/h</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherPhone