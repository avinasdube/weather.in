import React, { useContext } from 'react';
import './GreetingSection.scss';
import { ModeContext } from '../../context/ModeContext';
import weatherhead from '../../assets/images/weatherhead.jpg';


const GreetingSection = () => {
    
    const { theme } = useContext(ModeContext);

    // GETTING CURRENT DATE AND TIME

    const currentDate = new Date();

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = weekDays[currentDate.getDay()];

    const currentDateToday = currentDate.getDate();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = months[currentDate.getMonth()];

    const currentYear = currentDate.getFullYear();

    setInterval(() => {
        let a;
        let time;
        let timediv = document.getElementById('crntime');
        a = new Date();
        time = a.getHours() + ':' + a.getMinutes();
        const amPm = a.getHours() >= 12 ? 'PM' : 'AM';
        timediv.innerHTML = time + " " + amPm;
    }, 1000);

    /*const [greet, setGreet] = useState('');

    let a = new Date();

    if(a.getHours() <= 12){
        setGreet("Good Morning !");
    }else if(a.getHours() <= 16){
        setGreet("Good Afternoon !")
    }else if(a.getHours() <= 20){
        setGreet("Good Evening !")
    }else if(21 <= a.getHours()){
        setGreet("Good Night !")
    }

    console.log(greet)*/

    
    return (
        <div className={`greetingBox-light ${theme === 'light' ? 'greetingBox-light' : 'greetingBox-dark'}`} id='htbx'>
            <div className='notificationSection'>
                <div className='currentTimeDate'>
                    <div className='currentTime' id='crntime'></div>
                    <div className='currentMonthYear' id='crntmnth'>{currentDay}, {currentDateToday} {currentMonth}, {currentYear}</div>
                </div>
                <div id='greet'></div>
            </div>
            <div className='greetimg' id='grtimg'>
                <img src={weatherhead} alt=''></img>
            </div>
        </div>
    )
}

export default GreetingSection;