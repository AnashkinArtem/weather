import axios from "axios"

const URL_BASE = 'https://api.openweathermap.org/data/2.5/'

const API_KEY = 'f5d863d144d150a1ee1430b3b8f66794'

const getCurrentWeather = (city: string) => {
   return axios.get(`${URL_BASE}weather?q=${city}&appid=${API_KEY}`)
}

const getGeolocationWeather = (lat: number, lon: number) => {
   return axios.get(`${URL_BASE}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
}

const getHourlyForecastWeather = (city: string) => {
   return axios.get(`${URL_BASE}forecast?q=${city}&cnt=5&appid=${API_KEY}`)
}

const getGeolocationForecastWeather = (lat: number, lon: number) => {
   return axios.get(`${URL_BASE}forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}`)
}

export { getCurrentWeather, getGeolocationWeather, getHourlyForecastWeather, getGeolocationForecastWeather }