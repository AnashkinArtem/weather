import React from 'react'
import { useAppSelector } from 'src/hooks/hooks'

import thunderstorm from '../../img/thunderstorm.jpeg'
import cloudy from '../../img/cloudy.jpg'
import rainy from '../../img/rainy.jpg'
import snow from '../../img/snow.jpg'
import fog from '../../img/fog.jpg'
import clear from '../../img/clear.jpg'

interface IProps {
  title: string
}

const WeatherTheme: React.FC<IProps> = ({title}): JSX.Element => {

  const weatherInfo = useAppSelector((state) => state.weather.weatherDetails)   
  const weatherInfoApi = useAppSelector((state) => state.weatherApi.currentWeather) 

  return (
    <>
      {title === 'openweathermap' &&  weatherInfo?.weather ?
          <div className='bg' style={
            weatherInfo.weather[0].id >= 200 && weatherInfo.weather[0].id < 233 
            ? { backgroundImage: `url(${thunderstorm})` }
            : weatherInfo.weather[0].id >= 300 && weatherInfo.weather[0].id < 532 
            ? { backgroundImage: `url(${rainy})` }
            : weatherInfo.weather[0].id >= 600 && weatherInfo.weather[0].id < 623 
            ? { backgroundImage: `url(${snow})` }
            : weatherInfo.weather[0].id >= 701 && weatherInfo.weather[0].id < 782
            ? { backgroundImage: `url(${fog})` }
            : weatherInfo.weather[0].id === 800
            ? { backgroundImage: `url(${clear})` }
            : { backgroundImage: `url(${cloudy})` }
          }>              
          </div> : null          
      }
      {
        title === 'weatherapi' && weatherInfoApi?.current ?
        <div className='bg' style={
          weatherInfoApi.current.condition.code === 1000 
          ? { backgroundImage: `url(${clear})`}
          : weatherInfoApi.current.condition.code === 1003 || weatherInfoApi.current.condition.code === 1006
          ? { backgroundImage: `url(${cloudy})` }
          : weatherInfoApi.current.condition.code >= 1009 && weatherInfoApi.current.condition.code <= 1207
          ? { backgroundImage: `url(${rainy})` }
          : weatherInfoApi.current.condition.code === 1030
          ? { backgroundImage: `url(${fog})` }
          : weatherInfoApi.current.condition.code >= 1273
          ? { backgroundImage: `url(${thunderstorm})` }
          : { backgroundImage: `url(${snow})` }
        }>              
        </div> : null        
      }
    </>
  )
}

export default WeatherTheme
