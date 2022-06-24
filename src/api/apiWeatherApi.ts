import axios from "axios"

const URL_BASE = 'http://api.weatherapi.com/v1/'

const API_KEY = '991ff4ee19624ffe8da123038221806'

const getCurrentAndForecastWeatherApi = (city: string) => {
   return axios.get(`${URL_BASE}forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`)
}


export { getCurrentAndForecastWeatherApi }