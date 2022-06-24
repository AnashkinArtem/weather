import React from 'react'
import { TbTemperature } from 'react-icons/tb'
import { BsMoisture } from 'react-icons/bs'
import { BiWind } from 'react-icons/bi'
import { WeatherData } from 'src/utils/interface/interface'

import s from './details.module.scss'

interface IProps {
  details: WeatherData;
}

const WeatherDetails: React.FC<IProps> = ({details}): JSX.Element => {  

  return (
    <>
        {
          details.weather ?
          <div className={s.details}>
          {details ? <div className={s.weather__main}> {details.weather[0].main} </div> : null}
              <div className={s.weather__wrapper}>
                  {details ? <div className={s.image}><img src={`http://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`} alt="icon" /></div> : null}
                  {details ? <div className={s.temperature}>{`${(details.main.temp - 273).toFixed()}°`}</div> : null}
                  <div className={s.item}>
                      <div className={s.feels}><TbTemperature/> Feels: {details ? `${(details.main.feels_like - 273).toFixed()}°` : null}</div>
                      <div className={s.humidity}><BsMoisture/> Humidiny: {details ? `${(details.main.humidity).toFixed()}%` : null}</div>
                      <div className={s.wind}><BiWind/> Wind: {details ? `${details.wind.speed} km/h` : null}</div>
                  </div>
              </div>
          </div>
          : null
        }
    </>
  )
}

export default WeatherDetails