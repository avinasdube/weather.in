import React, { useContext } from 'react';
import './AirQualityIndex.scss';
import night from '../../assets/images/night.png';
import { ModeContext } from '../../context/ModeContext';
import location from '../../assets/icons/location.png';

const AirQualityIndex = () => {

  const {theme} = useContext(ModeContext);

  return (
    <div className="weatherMainBox">
      <div className={`airQualityIndex-light ${theme === 'light' ? 'airQualityIndex-light' : 'airQualityIndex-dark'}`}>
        <div className="head">
          <div className="headingText">
            Air Quality Index
          </div>
          <div className='location'>
                <img src={location} alt='' id='lctn'></img>
                <div className='cityname'>Patna</div>
            </div>
        </div>
        <div className="mid">
          <div className="midleft">
            <div className="midIcon">
              <img src={night} alt=''></img>
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
            <div className="refreshButton">
              <button id="refBtn">Refresh</button>
            </div>
          </div>
        </div>

        <div className="foot">
          <div className="gasIndexBox" id='gsIndBx'>
            <div className='quantity'>4.9</div>
            <div className="gasName">SO2</div>
          </div>
          <div className="gasIndexBox" id='gsIndBx'>
            <div className='quantity'>4.9</div>
            <div className="gasName">SO2</div>
          </div>
          <div className="gasIndexBox" id='gsIndBx'>
            <div className='quantity'>4.9</div>
            <div className="gasName">SO2</div>
          </div>
          <div className="gasIndexBox" id='gsIndBx'>
            <div className='quantity'>4.9</div>
            <div className="gasName">SO2</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirQualityIndex;