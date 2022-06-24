import React from 'react'
import moment from 'moment'
import { WeatherApiData } from 'src/utils/interface/interface'
import WeatherDetails from '../WeatherDetails/WeatherDetails'

import s from './location.module.scss'

interface IProps {
  weather: WeatherApiData
}

const LocationAndDate: React.FC<IProps> = ({weather}) => {
  return (
    <>
      <div className={s.location}>
          <div className={s.wrapper}>
            {weather ? <div className={s.city}>{weather.location?.name}</div> : null}
            {weather ? <div className={s.country}>{weather.location?.country}</div> : null}            
            <div className={s.date}>{moment().format('dddd')}, {moment().format('MMMM DD')}</div>
          </div>
          <WeatherDetails weather={weather}/>
      </div>
    </>
  )
}

export default LocationAndDate