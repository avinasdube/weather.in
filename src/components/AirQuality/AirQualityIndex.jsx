import React, { useContext } from 'react';
import './AirQualityIndex.scss';
import { ModeContext } from '../../context/ModeContext';
import location from '../../assets/icons/location.png';
import { UseWeatherContext } from '../../context/WeatherContext';

const AirQualityIndex = () => {

  const { theme } = useContext(ModeContext);

  // GETTING CURRENT DATA OF SELECTED CITY THROUGH API CALLED CONTEXT FILE

  const { state: { current, city, airquality} } = UseWeatherContext();

  return (
    <>
      {
        current ?

            <div className={`airQualityIndex-light ${theme === 'light' ? 'airQualityIndex-light' : 'airQualityIndex-dark'}`} id='arqltybx'>
              <div className="head">
                <div className="headingText">
                  Air Quality Index
                </div>
                <div className='location'>
                  <img src={location} alt='' id='lctn'></img>
                  <div className='cityname'>{city.city}</div>
                </div>
              </div>
              <div className="mid">
                <div className="midleft">
                  <div className="midIcon">
                    <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt=''></img>
                  </div>
                  <div className="midQualityText">
                    <div className="qualityHead">
                      Awesome
                    </div>
                    <div className="qualityQuote">
                      A perfect night to stroll !
                    </div>
                  </div>
                </div>
                <div className="midright">
                  <div className="aqiDetails">
                    <div className='aqiHead'>AQI</div>
                    <div className='aqiValue'>{airquality.list[0].main.aqi}</div>
                  </div>
                </div>
              </div>

              <div className="foot">
                <div className="gasIndexBox" id='gsIndBx'>
                  <div className='quantity'>{airquality.list[0].components.so2}</div>
                  <div className="gasName">SO2</div>
                </div>
                <div className="gasIndexBox" id='gsIndBx'>
                  <div className='quantity'>{airquality.list[0].components.pm2_5}</div>
                  <div className="gasName">PM 2</div>
                </div>
                <div className="gasIndexBox" id='gsIndBx'>
                  <div className='quantity'>{airquality.list[0].components.pm10}</div>
                  <div className="gasName">PM 10</div>
                </div>
                <div className="gasIndexBox" id='gsIndBx'>
                  <div className='quantity'>{airquality.list[0].components.co}</div>
                  <div className="gasName">CO</div>
                </div>
              </div>
            </div>
          : ''
      }
    </>
  )
}

export default AirQualityIndex;