import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { getGeolocationForecastWeather, getGeolocationWeather } from 'src/api/apiOpenWeatherMap'
import { useAppDispatch } from 'src/hooks/hooks'
import { setCityForecastWeather, setCityWeather, setForecastWeather, setWeather } from 'src/store/features/openWeatherMapSlice'

import s from './search.module.scss'

const Search = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const handleChange = (event: any) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    if(value){
      dispatch(setCityWeather(value))
      dispatch(setCityForecastWeather(value))
      setValue('')
    }    
  }

  const handleSubmit = (event: any) => {
    if(!value) return;
    if(event.key === 'Enter'){
        dispatch(setCityWeather(value))
        dispatch(setCityForecastWeather(value))      
        setValue('')           
    }
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;   
        getGeolocationWeather(lat, lon).then(data => dispatch(setWeather(data.data)))
        getGeolocationForecastWeather(lat, lon).then(data => dispatch(setForecastWeather(data.data)))
        setValue('') 
      })
    }
  };

  return (
    <div className={s.search}>
        <input 
          type="text" 
          placeholder='Search...' 
          value={value} 
          onChange={handleChange} 
          onKeyPress={handleSubmit}
        />
        <FiSearch onClick={handleClick}/>
        <HiOutlineLocationMarker onClick={handleLocationClick}/>
    </div>
  )
}

export default Search