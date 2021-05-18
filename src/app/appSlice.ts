import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from './store'
// import Http from './http'
import { axiosInstance } from './http'

interface Weather {
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

interface Obj {
  dt: number
  temp: Temp
  weather: Weather[]
}

interface ServerResponse {
  lat: number
  daily: Obj[];
}

interface AppState {
  daily: Obj[];
  status: 'idle' | 'loading' | 'failed';
}

export const getSevenDayForecast = createAsyncThunk(
  'app/getSevenDayForecast',
  (_, { dispatch, getState }) => {
    axiosInstance.get<ServerResponse>('onecall?lat=33.44&lon=-94.04')
      .then(response => {
        dispatch(dailyForecast(response))
      })
  })

const initialState: AppState = {
  daily: [],
  status: 'idle'
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    dailyForecast: (state, action) => {
      state.daily = action.payload.daily
      // console.log(action.payload.daily)
    }
  }
})

export const { dailyForecast } = appSlice.actions

export default appSlice.reducer
