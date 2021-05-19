import React, { FC } from 'react'
import classes from './styles.module.scss'
// import WeatherBlock from '../WeatherCard'
import CitiesSelect from '../CitiesSelect'
import Slider from '../Slider'
import DateInput from '../DateInput'
import PastTimeCard from '../PastTimeCard'
import WeatherCard from '../WeatherCard'

interface Props { }

const ForecastsBlock: FC<Props> = () => {
  return (
    <main className={classes.content}>
      <WeatherCard
        title="7 Days Forecast"
      >
        <div className={classes.content__field}>
          <CitiesSelect />
        </div>
        <Slider />
      </WeatherCard>
      <WeatherCard
        title="Forecast for a Date in the Past"
      >
        <div className={classes.content__fields}>
          <CitiesSelect />
          <DateInput />
        </div>
        <PastTimeCard />
      </WeatherCard>
    </main>
  )
}

export default ForecastsBlock
