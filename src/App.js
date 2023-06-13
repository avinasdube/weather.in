import './App.scss';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import DailyForecast from './components/DailyForecast/DailyForecast';
import { ModeContext, themes } from './context/ModeContext';
import AirQualityIndex from './components/AirQuality/AirQualityIndex';
import SunDetails from './components/SunDetails/SunDetails';
import WeatherPhone from './components/WeatherPhone/WeatherPhone';


function App() {

  const [theme, setTheme] = useState(themes.light);

  // FUNCTION TO TOGGLE THEMES ON CLICK

  function modeToggle(){
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }
  
  return (
    <>
      <ModeContext.Provider value={{theme, modeToggle}}> 
        <div className={`app-light ${theme === 'light' ? 'app-light' : 'app-dark'}`}>
          <Header theme={theme} />
          <div className='appMid'>
            <div className='appMidLeft'>
              <div className='appMidLeftTop'>
                <DailyForecast />
              </div>
              <div className='appMidLeftBottom'>
                <AirQualityIndex />
                <SunDetails />
              </div>
            </div>
            <div className='appMidRight'>
              <WeatherPhone />
            </div>
          </div>
        </div>
      </ModeContext.Provider>
    </>
  );
}

export default App;
