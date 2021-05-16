import React, { FC } from 'react'
import classes from './styles.module.scss'
import WeatherCard from '../WeatherCard'

interface Props { }

const AppContent: FC<Props> = () => {
  return (
        <main className={classes.content}>
            <WeatherCard />
            <WeatherCard />
        </main>
  )
}

export default AppContent
