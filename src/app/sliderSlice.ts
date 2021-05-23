import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from './store'
// import { SliderResponse, SliderState } from './types'
import { axiosInstance } from './http'

export interface IWeather {
  id: number
  main: string
  description: string
  icon: string
}

export interface ITemp {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
}

export interface IForecastObj {
  dt: number
  temp: ITemp
  weather: IWeather[]
}

export interface IServerResponse {
  daily: IForecastObj[];
}

export interface ISliderState {
  daily: IForecastObj[];
  status: 'idle' | 'loading' | 'failed';
}

interface ICoordinates {
  lat: number;
  lon: number;
}

export const getSevenDaysForecast = createAsyncThunk(
  'slider/getSevenDaysForecast',
  (coordinates: ICoordinates, { dispatch }) => {
    const { lat, lon } = coordinates
    axiosInstance.get<IServerResponse>(`onecall?lat=${lat}&lon=${lon}`)
      .then(response => {
        dispatch(dailyForecast(response))
        dispatch(fullFilledRequest())
      })
      .catch(() => dispatch(rejectedRequest()))
  })

const initialState: ISliderState = {
  daily: [],
  status: 'idle'
}

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    dailyForecast: (state, action) => {
      state.daily = action.payload.daily
    },
    fullFilledRequest: (state) => {
      state.status = 'idle'
    },
    rejectedRequest: (state) => {
      state.status = 'failed'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSevenDaysForecast.pending, (state) => {
        state.status = 'loading'
      })
  }
})

export const { dailyForecast, fullFilledRequest, rejectedRequest } = sliderSlice.actions

export default sliderSlice.reducer
