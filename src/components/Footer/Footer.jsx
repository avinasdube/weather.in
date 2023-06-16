import React, { useContext } from 'react';
import './Footer.scss';
import { ModeContext } from '../../context/ModeContext';
import weatherinlogo from '../../assets/icons/sunset.png'

const Footer = () => {

    const { theme } = useContext(ModeContext);

    return (
        <div className={`footerbox-light ${theme === 'light' ? 'footerbox-light' : 'footerbox-dark'}`}>

            <div className='logoSection' id='lgsctn'>
                <div className='logo' id='applgo'><img src={weatherinlogo} alt=''></img></div>
                <div className='appName' id='appNm'>Weather.In</div>
            </div>

            <div className='remarks' id='rmrks'>Designed & Developed By - Avinash Dubey. Data Fetched from - OpenWeatherApp.Org</div>
            <div className='remarks' id='rmrks'>&copy; 2023 Weather.In . All Rights Reserved</div>
        </div>
    )
}

export default Footer