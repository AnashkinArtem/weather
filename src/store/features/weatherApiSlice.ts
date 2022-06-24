import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getCurrentAndForecastWeatherApi } from 'src/api/apiWeatherApi'
import { WeatherApiData } from 'src/utils/interface/interface';

type CurrentWeatherApi = WeatherApiData

type CurrentWeatherApiState = {
    currentWeather: CurrentWeatherApi;
    loading: boolean;
    error: string | null
}

export const getWeatherApi = createAsyncThunk<CurrentWeatherApi, undefined, {rejectValue: string}>(
    'weather/getWeatherApi',
    async (_, { rejectWithValue}) => {
        const res = await fetch('http://api.weatherapi.com/v1/forecast.json?key=991ff4ee19624ffe8da123038221806&q=paris&days=3&aqi=no&alerts=no')

        if(!res.ok){
            return rejectWithValue('Server Error');
        }        
        const data = await res.json()

        return data;        
    }
)

const initialState: CurrentWeatherApiState = {
    currentWeather: {} as CurrentWeatherApi,
    loading: false,
    error: null,
}

export const setCityWeatherApi = createAsyncThunk(
    'weather/setCityWeatherApi',
    async (city: string, { rejectWithValue, dispatch }) => {
        const res = await getCurrentAndForecastWeatherApi(city)
        dispatch(setWeatherApi(res.data))
    }
)

export const weatherApiSlice = createSlice({
    name: 'weatherApi',
    initialState,
    reducers: {
        setWeatherApi: (state, action) => {
            state.currentWeather = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherApi.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getWeatherApi.fulfilled, (state, action) => {
                state.currentWeather = action.payload;
                state.loading = false;
            })
        }
})

export const { setWeatherApi } = weatherApiSlice.actions
export default weatherApiSlice.reducer