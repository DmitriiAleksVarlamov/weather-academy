import React, { FC } from 'react'
import classes from './styles.module.scss'
import { useAppSelector } from '../../app/hooks'
import { format } from 'date-fns'
import Spinner from '../Spinner'

interface Props { }

const PastTimeCard: FC<Props> = () => {
  const { currentForecast, status } = useAppSelector(store => store.pastTimeSlice)

  if (!currentForecast || status === 'loading') return <Spinner />

  const { dt, temp, weather } = currentForecast
  const { icon } = weather[0]
  const formatedDate = format(new Date(dt * 1000), 'dd MMMM yyyy')
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <section className={classes.container}>
      <span className={classes.container__date}>{formatedDate}</span>
      <img
        src={iconUrl}
        alt="forecast"
        className={classes.container__image}
      />
      <span className={classes.container__temperature}>{temp.toFixed()}°</span>
    </section>
  )
}

export default PastTimeCard
