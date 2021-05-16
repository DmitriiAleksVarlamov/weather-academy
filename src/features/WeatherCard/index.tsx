import React, { FC } from 'react'
import classes from './styles.module.scss'

const cities: Array<string> = ['Самара', 'Тольятти', 'Саратов', 'Казань', 'Краснодар']

interface Props { }

const WeatherCard: FC<Props> = () => {
  return (
    <section className={classes.card}>
      <h2 className={classes.card__title}>7 Days Forecast</h2>
      <div className={classes.card__wrapper}>
        <select className={classes.card__city}>{
          cities.map(city => (
            <option value={city} key={city}>{city}</option>
          ))
        }</select>
        <input type="date" className={classes.card__date} />
      </div>
      <div className={classes.information}>

      </div>
    </section>
  )
}

export default WeatherCard
