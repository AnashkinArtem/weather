interface WeatherData {
    coord: {
        lon: number,
        lat: number
    },
    weather: Array<{
        id: number,
        main: string,
        description: string,
        icon: string
    }>,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    wind: {
        speed: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        country: string
    },
    timezone: number,
    name: string
}

interface ForecastWeatherData {
    list: Array<{
        dt: number,
        dt_txt: string,
        main: {
            temp: number,
        },
        weather: Array<{
            icon: string
        }>
    }>  
}

interface WeatherApiData {
    current: {
        condition: {
            text: string, 
            icon: string, 
            code: number
        }
        feelslike_c: number
        feelslike_f: number
        gust_kph: number
        gust_mph: number
        humidity: number
        is_day: number
        last_updated: string
        last_updated_epoch: number
        precip_in: number
        precip_mm: number
        pressure_in: number
        pressure_mb: number
        temp_c: number
        temp_f: number
        uv: number
        vis_km: number
        vis_miles: number
        wind_degree: number
        wind_dir: string
        wind_kph: number
        wind_mph: number
    },
    location:{
        country: string
        lat: number
        localtime: string
        localtime_epoch: number
        lon: number
        name: string
        region: string
        tz_id: string
    },
    forecast: {
        forecastday: Array<{
            date: string,
            date_epoch: number,
            day: {
              maxtemp_c: number,
              maxtemp_f: number,
              mintemp_c: number,
              mintemp_f: number,
              avgtemp_c: number,
              avgtemp_f: number,
              maxwind_mph: number,
              maxwind_kph: number,
              totalprecip_mm: number,
              totalprecip_in: number,
              avgvis_km: number,
              avgvis_miles: number,
              avghumidity: number,
              daily_will_it_rain: number,
              daily_chance_of_rain: number,
              daily_will_it_snow: number,
              daily_chance_of_snow: number,
              condition: {
                text: string,
                icon: string,
                code: number
              },
              uv: 7.0
            },
            astro: {
              sunrise: string,
              sunset: string,
              moonrise: string,
              moonset: string,
              moon_phase: string,
              moon_illumination: string
            },  
        }
     >
    }
}

export { WeatherData, ForecastWeatherData, WeatherApiData }