import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import sliderSliceReducer from './sliderSlice'
import pastTimeSliceReducer from './pastTimeSlice'

export const store = configureStore({
  reducer: {
    sliderSlice: sliderSliceReducer,
    pastTimeSlice: pastTimeSliceReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
