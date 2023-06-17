import React, { useContext } from 'react';
import './SunDetails.scss';
import { ModeContext } from '../../context/ModeContext';
import sunrise from '../../assets/icons/sunrise.png';
import sunset from '../../assets/icons/sunset.png';
import location from '../../assets/icons/location.png';
import { UseWeatherContext } from '../../context/WeatherContext';

const SunDetails = () => {

    const { theme } = useContext(ModeContext);

    // GETTING CURRENT DATA OF SELECTED CITY THROUGH API CALLED CONTEXT FILE

    const { state: { current, city } } = UseWeatherContext();

    function getSunrise(e) {
        var s = new Date(e).toLocaleTimeString("en-US")
        return s;
    }

    function getSunset(e) {
        var s = new Date(e).toLocaleTimeString("en-US")
        return s;
    }

    return (
        <>
            {
                current ?
                        <div className={`sunDetails-light ${theme === 'light' ? 'sunDetails-light' : 'sunDetails-dark'}`} id='sndtlbx'>
                            <div className='head'>
                                <div className="headingText" id='sndtlhead'>
                                    Sunrise & Sunset
                                </div>
                            </div>
                            <div className='mid'>
                                <div className='sunTimeCard' id='sntmcrd'>
                                    <div className='location'>
                                        <img src={location} alt='' id='lctn'></img>
                                        <div className='cityname' id='ctnme'>{city.city}</div>
                                    </div>
                                    <div className='sunInfoBox'>
                                        <div className='detailBox' id='snbx'>
                                            <div className='Image'>
                                                <img src={sunrise} alt='' id='snimg'></img>
                                            </div>
                                            <div className='Details'>
                                                <div className='Heading' id='snhead'>
                                                    Sunrise
                                                </div>
                                                <div className='Timing' id='sntme'>
                                                    {getSunrise(current.sys.sunrise * 1000)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='detailBox'>
                                            <div className='Image'>
                                                <img src={sunset} alt='' id='snimg'></img>
                                            </div>
                                            <div className='Details'>
                                                <div className='Heading' id='snhead'>
                                                    Sunset
                                                </div>
                                                <div className='Timing' id='sntme'>
                                                    {getSunset(current.sys.sunset * 1000)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='sunIllus' id='sntmcrd'>

                                </div>
                            </div>
                        </div>
                    : ''
            }
        </>
    )
}

export default SunDetails;