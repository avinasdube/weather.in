import React, {useReducer, useContext} from 'react';

import { WeatherReducer } from './WeatherReducer';

const WeatherContext = React.createContext();

const WeatherAppProvider = ({children})=>{

    const [state, dispatch] = useReducer(WeatherReducer, {
        city: {
            "city": "Patna", 
            "lat": "25.6000", 
            "lng": "85.1000", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "Bihār", 
            "capital": "admin", 
            "population": "1684222", 
            "population_proper": "1684222",
          },
        current: '',
        airquality: ''
    })

    return(
        <>
          <WeatherContext.Provider value={{state, dispatch}}>
            {children}
          </WeatherContext.Provider>
        </>
    )
}

export default WeatherAppProvider;

export const UseWeatherContext = ()=>{
    return useContext(WeatherContext);
}