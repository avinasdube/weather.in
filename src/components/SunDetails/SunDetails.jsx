import React, { useContext } from 'react';
import './SunDetails.scss';
import { ModeContext } from '../../context/ModeContext';
import sunrise from '../../assets/icons/sunrise.png';
import sunset from '../../assets/icons/sunset.png';

const SunDetails = () => {

    const { theme } = useContext(ModeContext);

    return (
        <div className='sunDetailsBox'>
            <div className={`sunDetails-light ${theme === 'light' ? 'sunDetails-light' : 'sunDetails-dark'}`}>
                <div className='head'>
                    <div className="headingText">
                        Sunrise & Sunset
                    </div>

                </div>
                <div className='mid'>
                    <div className='sunTimeCard'>
                        <div className='cityName'>
                            Gopalganj
                        </div>
                        <div className='sunInfoBox'>
                            <div className='detailBox'>
                                <div className='Image'>
                                    <img src={sunrise} alt=''></img>
                                </div>
                                <div className='Details'>
                                    <div className='Heading'>
                                        Sunrise
                                    </div>
                                    <div className='Timing'>
                                        4:40 AM
                                    </div>
                                </div>
                            </div>
                            <div className='detailBox'>
                                <div className='Image'>
                                    <img src={sunset} alt=''></img>
                                </div>
                                <div className='Details'>
                                    <div className='Heading'>
                                        Sunset
                                    </div>
                                    <div className='Timing'>
                                        6:53 PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sunTimeCard'>
                        <div className='cityName'>
                            Rajgir
                        </div>
                        <div className='sunInfoBox'>
                            <div className='detailBox'>
                                <div className='Image'>
                                    <img src={sunrise} alt=''></img>
                                </div>
                                <div className='Details'>
                                    <div className='Heading'>
                                        Sunrise
                                    </div>
                                    <div className='Timing'>
                                        4:40 AM
                                    </div>
                                </div>
                            </div>
                            <div className='detailBox'>
                                <div className='Image'>
                                    <img src={sunset} alt=''></img>
                                </div>
                                <div className='Details'>
                                    <div className='Heading'>
                                        Sunset
                                    </div>
                                    <div className='Timing'>
                                        6:53 PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SunDetails;