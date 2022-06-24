import React from 'react'
import { ForecastWeatherData } from 'src/utils/interface/interface'

import s from './forecast.module.scss'

interface IProps {
    hourlyWeather: ForecastWeatherData
}

const Forecast: React.FC<IProps> = ({hourlyWeather}): JSX.Element => {

 return (
    <>
        <div className={s.forecast}>
            <div className={s.forecast__title}>
                hourly forecast
            </div>
            <hr />
            <div className={s.forecast__wrapper}>
              {
                hourlyWeather ? 
                hourlyWeather.list?.map((forecast) => {
                    return (
                        <div className={s.forecast__item} key={forecast.dt}>
                            <div className={s.time}>{forecast.dt_txt.split(' ')[1].substring(0, 5)}</div>
                            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="img" />
                            <div className={s.temperature}>{(forecast.main.temp - 273).toFixed()}°</div>
                        </div>
                    )
                })
                : null
              }                 
            </div>
        </div>
    </>
  )
}

export default Forecast