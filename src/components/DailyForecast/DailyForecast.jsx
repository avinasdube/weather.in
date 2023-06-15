import React, { useContext } from 'react';
import './DailyForecast.scss';
import feat from '../../assets/images/rain.png';
import { ModeContext } from '../../context/ModeContext';

const DailyForecast = () => {

  const {theme} = useContext(ModeContext);

  /* highlighting current day forecast

  const currentDate = new Date();
  const currentDateToday = currentDate.getDate();

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = weekDays[currentDate.getDay()]; */


  // ARRAY OF DAILY WEATHER REPORT CARDS

  const dailyCard = [
    {
      id: 1,
      image: feat,
      day: 'Sun',
      temp: '8 C',
    },
    {
      id: 2,
      image: feat,
      day: 'Mon',
      temp: '8 C',
    },
    {
      id: 3,
      image: feat,
      day: 'Tue',
      temp: '8 C',
    },
    {
      id: 4,
      image: feat,
      day: 'Wed',
      temp: '8 C',
    },
    {
      id: 5,
      image: feat,
      day: 'Thurs',
      temp: '8 C',
    },
    {
      id: 6,
      image: feat,
      day: 'Fri',
      temp: '8 C',
    },
    {
      id: 7,
      image: feat,
      day: 'Sat',
      temp: '8 C',
    },
  ];

  return (
    <div className="dailyForecast">
      <div className='categoryBox'>
        {dailyCard.map(dCard =>(
          <div className={`weatherInfo-light ${theme === 'light' ? 'weatherInfo-light' : 'weatherInfo-dark'}`} id='wthrInfCrd' key={dCard.id}>
            <img src={dCard.image} alt=''></img>
            <div className='dayname' id='getDay'>{dCard.day}</div>
            <div className='tempdetails'>{dCard.temp}</div >
          </div>
        ))}
      </div>
    </div>
  )
}

export default DailyForecast;