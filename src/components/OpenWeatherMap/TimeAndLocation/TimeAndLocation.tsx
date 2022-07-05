import React from 'react'
import moment from 'moment'
import { WeatherData } from 'src/utils/interface/interface';
import eventsData from '../../../data/EventsData'

import s from './time.module.scss'


interface IProps {
    weather: WeatherData;
}

const TimeAndLocation: React.FC<IProps> = ({weather}): JSX.Element => {

const Events = eventsData.filter((event) => moment().format('l') === moment(event.dt).format('l'))

return (
    <>
        <div className={s.wrapper}>
            <div className={s.date}>
                <div className={s.date__time}>{moment().format('LT')}</div>
                <div className={s.date__descr}>{moment().format('dddd')}, {moment().format('LL')}</div>
                {
                    Events.length ?
                        <div className={s.events}>
                            <div className={s.time__wrapper} >
                                {Object.keys(Events[0].event).map((time) => <div className={s.time} key={Math.random()}>{time}</div>)}
                            </div>
                            <div className={s.title__wrapper}>
                                {Object.values(Events[0].event).map((title) => <div className={s.title} key={Math.random()}>{title}</div>)}
                            </div>           
                        </div>
                    : null
                }                
            </div>
            <div className={s.location}>
                {weather ? <div className={s.location__city}>{weather.name}</div> : null}
                {weather ? <div className={s.location__country}>{weather.sys?.country}</div> : null}
            </div>
        </div>
    </>
  )
}

export default TimeAndLocation