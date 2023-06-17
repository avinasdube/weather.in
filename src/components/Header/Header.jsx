import React, { useContext, useEffect, useRef, useState } from 'react';
import './Header.scss';
import { ModeContext } from '../../context/ModeContext';
import ModeToggle from '../ModeToggle/ModeToggle';
import cities from '../../data/in.json';
import weatherinlogo from '../../assets/icons/sunset.png'

import { UseWeatherContext } from '../../context/WeatherContext';

import axios from 'axios';

const Header = () => {

    // FUNCTION TO CLOSE THE MENU BAR WHEN CLICKED OUTSIDE ANYWHERE

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setDropdown(false);
            }
        };

        document.addEventListener("mousedown", handler);
    })

    const { theme } = useContext(ModeContext);

    // CODE TO TOGGLE LOCATION BAR

    const [dropdown, setDropdown] = useState(false);

    // FUNCTION TO TOGGLE THEMES ON CLICK

    const dropdownToggle = () => {
        dropdown === false ? setDropdown(true) : setDropdown(false);
    }

    const { state: { city }, dispatch } = UseWeatherContext();

    const handleCityChange = (e) => {

        const selectedCity = cities.filter((city) => {
            return city.city === e.target.value
        })[0]

        const selectedCityName = selectedCity.city;

        const selectHead = document.getElementById('slctct');

        selectHead.innerText = selectedCityName;

        dispatch({
            type: 'SET_CITY',
            payload: selectedCity
        })
    }

    // MAKING API CALL TO UPDATE CURRENT CITY WEATHER DETAILS

    const APIKEY = 'a1e3ae7f267c63788316c6e93cbd75a8';
    let lat = city && city.lat ? city.lat : '';
    let long = city && city.lng ? city.lng : '';
    let exclude = 'hourly, minutely';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`

    // URL FOR AIR QUALITY DETAILS

    const aqUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${APIKEY}`;

    const fetchData = () => {
        axios(url).then((data) => {
            if (data.status === 200) {
                let currentData = data.data;

                dispatch({
                    type: 'SET_CURRENT',
                    payload: currentData
                })
            }
            else {
                alert('Not Connected');
            }
        })

        axios(aqUrl).then((data) => {
            if (data.status === 200) {
                let aqData = data.data;

                dispatch({
                    type: 'SET_AIRQUALITY',
                    payload: aqData
                })
            }
            else {
                alert('Not Connected');
            }
        })

    }

    useEffect(() => {
        fetchData();
    }, [city])

    return (
        <div className={`headerContainer ${theme === 'light' ? 'headerContainer-light' : 'headerContainer-dark'}`}>
            <div className="header" id='hdr'>
                <div className='logoSection' id='lgsctn'>
                    <div className='logo' id='applgo'><img src={weatherinlogo} alt=''></img></div>
                    <div className='appName' id='appNm'>Weather.In</div>
                </div>

                <div className='headerRight' id='hdrght'>
                    <div className='locationSelector' id='lctnslct' ref={menuRef} >
                        <div className='selectDropdown' onClick={dropdownToggle} id='slctDrpdn'>
                            <div className='defaultCityName' id='slctct'>{city.city}</div>
                            <span className={`arrowDownIcon ${dropdown === true ? 'arrowDownIcon-up' : 'arrowDownIcon'}`} id='arwicn'></span>
                        </div>
                        <div className={`citiesList ${dropdown === true ? 'active' : 'inactive'}`} id='ctylst' defaultValue={city} onChange={handleCityChange}>
                            <div className='citiesScrollBox'>
                                {
                                    cities && cities.length > 0 && cities.map((city) => {

                                        return [
                                            <ul className='options' key={`${city.population}${city.lat}`} value={city.city} >
                                                <option value={city.city} onClick={(e) => { handleCityChange(e); setDropdown(false) }} id='optn'>{city.city} - {city.admin_name}</option>
                                            </ul>
                                        ]
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className='modeToggleBox'>
                        <ModeToggle />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;