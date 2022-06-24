import React from 'react'
import { WeatherApiData } from 'src/utils/interface/interface'

import s from './details.module.scss'

interface IProps {
  weather: WeatherApiData
}

const WeatherDetails: React.FC<IProps> = ({weather}): JSX.Element => {
  return (
    <>
        <div className={s.details}>
            <div className={s.main__wrapper}>
                <div className={s.column__wrapper}>
                    {weather ? <img src={weather.current?.condition.icon} alt="icon" /> : null}  
                    {weather ? <div className={s.condition}>{weather.current?.condition.text}</div> : null}                                  
                </div>
                {weather ? <div className={s.temp}>{weather.current?.temp_c.toFixed()}°</div> : null}
            </div>
        </div>
    </>
  )
}

export default WeatherDetails