import React, { useContext } from 'react';
import './GreetingSection.scss';
import { ModeContext } from '../../context/ModeContext';
import weatherhead from '../../assets/images/weatherhead.jpg';


const GreetingSection = () => {
    
    const { theme } = useContext(ModeContext);

    // GETTING CURRENT DATE AND TIME

    const currentDate = new Date();
    const currentTime = currentDate.getHours() + ' : ' + currentDate.getMinutes();
    const amPm = currentDate.getHours() >= 12 ? 'PM' : 'AM';

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = weekDays[currentDate.getDay()];

    const currentDateToday = currentDate.getDate();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = months[currentDate.getMonth()];

    const currentYear = currentDate.getFullYear();

    
    return (
        <div className={`greetingBox-light ${theme === 'light' ? 'greetingBox-light' : 'greetingBox-dark'}`} id='htbx'>
            <div className='notificationSection'>
                <div className='currentTimeDate'>
                    <div className='currentTime' id='crntime'> {currentTime} {amPm}</div>
                    <div className='currentMonthYear' id='crntmnth'>{currentDay}, {currentDateToday} {currentMonth}, {currentYear}</div>
                </div>
                <p>Hello, User !</p>
            </div>
            <div className='greetimg' id='grtimg'>
                <img src={weatherhead} alt=''></img>
            </div>
        </div>
    )
}

export default GreetingSection