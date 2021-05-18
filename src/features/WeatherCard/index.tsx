import React, { FC } from 'react'
import classes from './styles.module.scss'
import EmptyCard from '../EmptyCard'
import UserSlider from '../AppSlider'

const cities: Array<string> = ['Самара', 'Тольятти', 'Саратов', 'Казань', 'Краснодар']

interface Props {
  title: string;
}

const WeatherCard: FC<Props> = ({ title }) => {
  return (
    <article className={classes.card}>
      <h2 className={classes.card__title}>{title}</h2>
      <div className={classes.card__wrapper}>
        <select className={classes.card__city}>{
          cities.map(city => (
            <option value={city} key={city}>{city}</option>
          ))
        }</select>
        <input type="date" className={classes.card__date} />
      </div>
      <div className={classes.information}>
        <UserSlider />
        {/* <EmptyCard /> */}
      </div>
    </article>
  )
}

export default WeatherCard
