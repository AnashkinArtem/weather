import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getCurrentWeather, getHourlyForecastWeather} from 'src/api/apiOpenWeatherMap'
import { ForecastWeatherData, WeatherData } from 'src/utils/interface/interface'

type Weather = WeatherData

type ForecastWeather = ForecastWeatherData

type WeatherState = {
    weatherDetails: Weather;
    weatherForecast: ForecastWeather;
    loading: boolean;
    error: string | null;
}

export const getWeather = createAsyncThunk<Weather, undefined, {rejectValue: string}>(
    'weather/getWeather',
    async (_, { rejectWithValue}) => {
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=f5d863d144d150a1ee1430b3b8f66794')

        if(!res.ok){
            return rejectWithValue('Server Error');
        }        
        const data = await res.json()

        return data;        
    }
)

export const getForecastWeather = createAsyncThunk<ForecastWeather, undefined, {rejectValue: string}>(
  'weather/getForecastWeather',
  async (_, { rejectWithValue}) => {
      const res = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=berlin&cnt=5&appid=876e032900b266e2bc99985bd7ff86c6')

      if(!res.ok){
          return rejectWithValue('Server Error');
      }        
      const data = await res.json()

      return data;        
  }
)

const initialState: WeatherState = {
  weatherDetails: {} as Weather,
  weatherForecast: {} as ForecastWeather,
  loading: false,
  error: null,
}

export const setCityWeather = createAsyncThunk(
    'weather/setCityWeather',
    async (city: string, { rejectWithValue, dispatch }) => {
        const res = await getCurrentWeather(city)
        dispatch(setWeather(res.data))
    }
)

export const setCityForecastWeather = createAsyncThunk(
  'weather/setCityForecastWeather',
  async (city: string, { rejectWithValue, dispatch }) => {
      const res = await getHourlyForecastWeather(city)
      dispatch(setForecastWeather(res.data))
  }
)

export const openWeatherMapSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather: (state, action) => {
            state.weatherDetails = action.payload
        },
        setForecastWeather: (state, action) => {
            state.weatherForecast = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.weatherDetails = action.payload;
                state.loading = false;
            })
            .addCase(getForecastWeather.pending, (state) => {
              state.loading = true;
              state.error = null
            })
            .addCase(getForecastWeather.fulfilled, (state, action) => {
                state.weatherForecast = action.payload;
                state.loading = false;
            })
    }
})

export const { setWeather, setForecastWeather } = openWeatherMapSlice.actions
export default openWeatherMapSlice.reducer



