import React, { FC, useEffect } from 'react'
import classes from './styles.module.scss'
import AppHeader from './features/AppHeader'
import ForecastsBlock from './features/ForecastsBlock'
import { getSevenDaysForecast } from './app/sliderSlice'
import { useAppDispatch } from './app/hooks'
import { getHistoryForecast } from './app/pastTimeSlice'

interface Props { }

export const App: FC<Props> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSevenDaysForecast())
    dispatch(getHistoryForecast())
  }, [])

  return (
    <div className={classes.container}>
      <AppHeader />
      <ForecastsBlock />
      <footer className={classes.footer}>
        с любовью от mercury development
      </footer>
    </div>
  )
}

export default App
