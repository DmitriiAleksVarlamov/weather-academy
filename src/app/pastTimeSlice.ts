import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from './store'
import { axiosInstance } from './http'

interface CurForecast {
  dt: number;
  temp: number;
  weather: [{icon: string}];
}

interface PastTimeState {
  currentForecast: CurForecast | null;
  status: 'idle' | 'loading' | 'failed';
}

export const getHistoryForecast = createAsyncThunk(
  'pastTime/getHistoryForecast',
  (_, { dispatch, getState }) => {
    axiosInstance.get<CurForecast>('onecall/timemachine?lat=60.99&lon=30.9&dt=1620999927')
      .then(response => {
        dispatch(historyForecast(response))
      })
  })

const initialState: PastTimeState = {
  currentForecast: null,
  status: 'idle'
}

const pastTimeSlice = createSlice({
  name: 'pastTime',
  initialState,
  reducers: {
    historyForecast: (state, action) => {
      state.currentForecast = action.payload.current
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHistoryForecast.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getHistoryForecast.fulfilled, (state) => {
        state.status = 'idle'
      })
      .addCase(getHistoryForecast.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export default pastTimeSlice.reducer

export const { historyForecast } = pastTimeSlice.actions
