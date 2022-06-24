import React from 'react'
import moment from 'moment'
import { WeatherApiData } from 'src/utils/interface/interface'

import s from './forecast.module.scss'
import { BsFillSunriseFill, BsFillSunsetFill, BsMoisture } from 'react-icons/bs'
import { BiWind } from 'react-icons/bi'

interface IProps {
    forecast: WeatherApiData
}

const Forecast: React.FC<IProps> = ({forecast}): JSX.Element => {

 return (
    <>
        <div className={s.forecast}>
            <div className={s.forecast__title}>daily forecast</div>
            <hr />
            <div className={s.forecast__wrapper}>
                {
                    forecast ?
                    forecast.forecast?.forecastday.map((item) => {
                        return(
                            <div className={s.day__wrapper} key={Math.random()}>
                                <div className={s.day}>{moment(item.date).format('dddd')}</div>
                                <div className={s.day__items}>
                                    <div className={s.item} >    
                                        <div>{`Min: ${(item.day.mintemp_c).toFixed()} °`}</div>
                                        <img src={item.day.condition.icon} alt="icon" />
                                        <div>{`Max: ${(item.day.maxtemp_c).toFixed()} °`}</div>
                                    </div>
                                    <div className={s.item}>
                                        <div><BsFillSunriseFill/>{item.astro.sunrise}</div>
                                        <div><BsFillSunsetFill/>{item.astro.sunset}</div>
                                        <div><BiWind/>{item.day.maxwind_kph} km/h</div>
                                        <div><BsMoisture/>{`${(item.day.avghumidity).toFixed()} %`}</div>
                                    </div>
                                </div>
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