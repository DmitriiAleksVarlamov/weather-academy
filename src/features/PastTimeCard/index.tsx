import React, { FC } from 'react'
import classes from './styles.module.scss'
import { useAppSelector } from '../../app/hooks'
import { format } from 'date-fns'
import Spinner from '../Spinner'
import fromUnixTime from 'date-fns/fromUnixTime'
import EmptyCard from '../EmptyCard'
import ErrorMessage from '../ErrorMessage'

const PastTimeCard: FC = () => {
  const { currentForecast, status } = useAppSelector(store => store.pastTimeSlice)
  // Обработка загрузкиб ошибки и пустой карточки
  if (status === 'failed') return <ErrorMessage />
  if (status === 'loading') return <Spinner />
  if (!currentForecast) return <EmptyCard />

  const { dt, temp, weather } = currentForecast
  const { icon } = weather[0]
  const formatedDate = format(new Date(fromUnixTime(dt)), 'dd MMMM yyyy')
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
