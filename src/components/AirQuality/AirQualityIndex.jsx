import React, { useContext } from 'react';
import './AirQualityIndex.scss';
import { ModeContext } from '../../context/ModeContext';
import location from '../../assets/icons/location.png';
import { UseWeatherContext } from '../../context/WeatherContext';

const AirQualityIndex = () => {

  const { theme } = useContext(ModeContext);

  // GETTING CURRENT DATA OF SELECTED CITY THROUGH API CALLED CONTEXT FILE

  const { state: { current, city, airquality } } = UseWeatherContext();

  function airqualityStatus(){
    if((airquality.list && airquality.list[0].main.aqi) <= 1.5){
      return "Good";
    }else if( (airquality.list && airquality.list[0].main.aqi) <= 2.5){
      return "Moderate";
    }else if(2.5 < (airquality.list && airquality.list[0].main.aqi)){
      return "Severe";
    }
  }

  function aqiMessage(){
    let aqiStatus = airqualityStatus();

    if(aqiStatus === "Good"){
      return "Nice Day to go out."
    }else if(aqiStatus === "Moderate"){
      return "Wear mask before going out."
    }else if(aqiStatus === "Severe"){
      return "Avoid going out."
    }
  }

  function changeStatusColor(){
    let aqiStatus = airqualityStatus();
    const aqiLine = document.getElementById('qlthd');

    if(aqiStatus === "Good"){
      aqiLine.style.color = "Green";
    }else if(aqiStatus === "Moderate"){
      aqiLine.style.color = "#ff6f00";
    }else if(aqiStatus === "Severe"){
      aqiLine.style.color = "Red";
    }
  }

  changeStatusColor();

  return (
    <>
      {
        current ?

          <div className={`airQualityIndex-light ${theme === 'light' ? 'airQualityIndex-light' : 'airQualityIndex-dark'}`} id='arqltybx'>
            <div className="head" id='aqhead'>
              <div className="headingText" id='aqheadtxt'>
                Air Quality Index
              </div>
              <div className='location'>
                <img src={location} alt='' id='lctn'></img>
                <div className='cityname' id='ctnme'>{city.city}</div>
              </div>
            </div>

            <div className="mid" id='aqmid'>
              <div className='midtop' id='aqmidtop'>
                <div className="midleft">
                  <div className="midIcon" id='aqimidicon'>
                    {
                    current.weather && <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt=''></img>
                    }
                  </div>
                  <div className="midQualityText" id='aqiqltytxt'>
                    <div className="qualityHead" id='qlthd'>
                      {airqualityStatus()}
                    </div>
                    <div className="qualityQuote" id='qltqte'>
                      {aqiMessage()}
                    </div>
                  </div>
                </div>
                <div className="midright" >
                  <div className="aqiDetails" id='aqidtlbx'>
                    <div className='aqiHead'>AQI</div>
                    {airquality.list &&<div className='aqiValue'>{airquality.list[0].main.aqi}</div>}
                  </div>
                </div>
              </div>
              <div className="foot" id='aqfoot'>
                <div className="gasIndexBox" id='gsIndBx'>
                  {airquality.list &&  <div className='quantity'>{airquality.list[0].components.so2}</div>}
                  <div className="gasName">SO2</div>
                </div>
                <div className="gasIndexBox" id='gsIndBx'>
                  {airquality.list && <div className='quantity'>{airquality.list[0].components.pm2_5}</div>}
                  <div className="gasName">PM 2</div>
                </div>
                <div className="gasIndexBox" id='gsIndBx'>
                 {airquality.list && <div className='quantity'>{airquality.list[0].components.pm10}</div>}
                  <div className="gasName">PM 10</div>
                </div>
                <div className="gasIndexBox" id='gsIndBx'>
                 {airquality.list && <div className='quantity'>{airquality.list[0].components.co}</div>}
                  <div className="gasName">CO</div>
                </div>
              </div>
            </div>
          </div>
          : ''
      }
    </>
  )
}

export default AirQualityIndex;