import React, { useEffect } from 'react'
import Forecast from './Forecast/Forecast'
import Search from './Search/Search'
import TimeAndLocation from './TimeAndLocation/TimeAndLocation'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks'
import { getForecastWeather, getWeather } from 'src/store/features/openWeatherMapSlice'



const OpenWeatherMap = () => {
  const dispatch = useAppDispatch()
  const weather = useAppSelector((state) => state.weather.weatherDetails)
  const hourlyWeather = useAppSelector((state) => state.weather.weatherForecast)

  useEffect(() => {
    if(!Object.keys(weather).length){
      dispatch(getWeather())
    }    
  }, [dispatch, weather])

  useEffect(() => {
    if(!Object.keys(hourlyWeather).length){
      dispatch(getForecastWeather())
    }      
  }, [dispatch, hourlyWeather])  


  return (
    <>
      <Search/>
      <TimeAndLocation weather={weather} />     
      <WeatherDetails details={weather}/>
      <Forecast hourlyWeather={hourlyWeather} />
    </>
  )
}

export default OpenWeatherMap