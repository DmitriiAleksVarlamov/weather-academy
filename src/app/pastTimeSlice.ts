import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { axiosInstance } from './http'

interface ICurForecast {
  dt: number;
  temp: number;
  weather: [{icon: string}];
}

interface IResponseData {
  current: ICurForecast;
  hourly: ICurForecast[];
}

interface IPastTimeState {
  currentForecast: ICurForecast | null;
  status: 'idle' | 'loading' | 'failed';
}

interface IPayload {
    date: number;
    lat: number;
    lon: number;
}

export const getHistoryForecast = createAsyncThunk(
  'pastTime/getHistoryForecast',
  (requestData: IPayload, { dispatch }) => {
    const { date, lon, lat } = requestData
    axiosInstance.get<IResponseData>(`onecall/timemachine?lat=${lat}&lon=${lon}&dt=${date}`)
      .then(response => {
        dispatch(historyForecast(response))
        dispatch(fullfilledRequest())
      })
      .catch(() => {
        dispatch(rejectedRequest())
      })
  })

const initialState: IPastTimeState = {
  currentForecast: null,
  status: 'idle'
}

const pastTimeSlice = createSlice({
  name: 'pastTime',
  initialState,
  reducers: {
    historyForecast: (state, action) => {
      const { hourly } = action.payload
      // Темпратура в полдень. Выбрал один промежуток времени
      // Можно расчитать среднюю. Но лучше сменить интерфейс
      // и сделать две вкладки с возможностью выбора кокретного времени
      state.currentForecast = hourly[12]
    },
    fullfilledRequest: (state) => {
      state.status = 'idle'
    },
    rejectedRequest: (state) => {
      state.status = 'failed'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHistoryForecast.pending, (state) => {
        state.status = 'loading'
      })
  }
})

export default pastTimeSlice.reducer

export const {
  historyForecast,
  fullfilledRequest,
  rejectedRequest
} = pastTimeSlice.actions
