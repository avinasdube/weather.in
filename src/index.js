import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.scss';
import WeatherAppProvider from './context/WeatherContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <WeatherAppProvider>
        <App />
      </WeatherAppProvider>
    </React.StrictMode>
);
