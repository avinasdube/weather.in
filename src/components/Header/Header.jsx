import React, { useContext } from 'react';
import './Header.scss';
import { ModeContext } from '../../context/ModeContext';
import ModeToggle from '../ModeToggle/ModeToggle';

const Header = () => {

    const {theme} = useContext(ModeContext);

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

    // GETTING THE RIGHT GREETWORD ACCORDING TO TIME

    const greetWord = () => {
        var gWord = " ";

        if (4 < currentDate.getHours() < 12) {
            gWord = 'Good Afternoon';
        } else if (12 < currentDate.getHours() < 18) {
            gWord = 'Good Evening';
        } else if (18 < (currentDate.getHours()) < 20) {
            gWord = 'Good Evening';
        } else if (20 < (currentDate.getHours()) < 24) {
            gWord = 'Good Night';
        }

        return gWord;
    }

    return (
        <div className={`headerContainer ${theme === 'light' ? 'headerContainer-light' : 'headerContainer-dark'}`}>
            <div className="headerLeft">
                <div className='notificationSection'>
                    <div className='currentTimeDate'>
                        <div className='currentTime'> {currentTime} {amPm}</div>
                        <div className='currentMonthYear'>{currentDay}, {currentDateToday} {currentMonth}, {currentYear}</div>
                    </div>
                    <div className='greetCard'>
                        {greetWord()}, Dear User !
                    </div>
                </div>
            </div>
            <div className='headerRight'>
                <ModeToggle />
            </div>
        </div>
    )
}

export default Header;