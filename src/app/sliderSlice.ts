import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from './store'
// import { SliderResponse, SliderState } from './types'
import { axiosInstance } from './http'

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Temp {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
}

export interface Obj {
  dt: number
  temp: Temp
  weather: Weather[]
}

export interface ServerResponse {
  daily: Obj[];
}

export interface SliderState {
  daily: Obj[];
  status: 'idle' | 'loading' | 'failed';
}

export const getSevenDaysForecast = createAsyncThunk(
  'slider/getSevenDaysForecast',
  (_, { dispatch, getState }) => {
    axiosInstance.get<ServerResponse>('onecall?lat=33.44&lon=-94.04')
      .then(response => {
        dispatch(dailyForecast(response))
      })
  })

const initialState: SliderState = {
  daily: [],
  status: 'idle'
}

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    dailyForecast: (state, action) => {
      state.daily = action.payload.daily
      // console.log(action.payload.daily)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSevenDaysForecast.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getSevenDaysForecast.fulfilled, (state) => {
        state.status = 'idle'
      })
      .addCase(getSevenDaysForecast.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const { dailyForecast } = sliderSlice.actions

export default sliderSlice.reducer
