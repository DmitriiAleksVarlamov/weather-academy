import React, { FC } from 'react'
import classes from './styles.module.scss'
import WeatherCard from '../WeatherCard'

interface Props { }

const AppContent: FC<Props> = () => {
  return (
    <main className={classes.content}>
      <WeatherCard title="7 Days Forecast" />
      <WeatherCard title="Forecast for a Date in the Past" />
    </main>
  )
}

export default AppContent
