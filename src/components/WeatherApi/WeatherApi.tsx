import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks'
import { getWeatherApi } from 'src/store/features/weatherApiSlice'
import Forecast from './Forecast/Forecast'
import LocationAndDate from './LocationAndDate/LocationAndDate'
import Search from './Search/Search'

const WeatherApi = () => {
  const dispatch = useAppDispatch()
  const weather = useAppSelector((state) => state.weatherApi.currentWeather)
 
  useEffect(() => {
    if(!Object.keys(weather).length){
      dispatch(getWeatherApi())
    }    
  }, [dispatch, weather])
  
  return (
    <>
      <Search/>
      <LocationAndDate weather={weather}/>
      <Forecast forecast={weather}/>
    </>
  )
}

export default WeatherApi