import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import OpenWeatherMap from '../OpenWeatherMap/OpenWeatherMap';
import WeatherApi from '../WeatherApi/WeatherApi';
import WeatherTheme from '../WeatherTheme/WeatherTheme';

import s from './services.module.scss'

const WeatherServices: React.FC = () => {

  const [title, setTitle] = useState('openweathermap')
  const setActive = ({isActive} : {isActive: any}) => isActive ? 'active__link' : '';  

  return (
    <BrowserRouter>
      <div className={s.services}>

        <WeatherTheme title={title}/>

        <h4>Choose a weather services:</h4>
        
        <div className={s.services__wrapper}>
          <NavLink to="/" className={setActive} onClick={() => setTitle('openweathermap')}><span className={s.services__link}>openweathermap</span></NavLink>
          <NavLink to="/weatherapi" className={setActive} onClick={() => setTitle('weatherapi')}><span className={s.services__link}>weatherapi</span></NavLink>
        </div>

        <Routes>
            <Route path='/' element={<OpenWeatherMap/>}/>
            <Route path='/weatherapi' element={<WeatherApi/>}/>
        </Routes> 
      </div>
    </BrowserRouter>
  )
}

export default WeatherServices