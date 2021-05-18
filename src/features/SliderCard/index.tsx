import React, { FC } from 'react'
import classes from './styles.module.scss'
import { format } from 'date-fns'
import { Temp } from '../../app/appSlice'

interface Props {
  date: number;
  temperature: Temp;
  icon: string;
}

const SliderCard: FC<Props> = ({ date, temperature, icon }) => {
  const formatedDate = format(new Date(date * 1000), 'dd MMMM yyyy')
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
  const tempsArray = Object.values(temperature)
  const medianTemp = tempsArray.reduce((sum, cur) => sum += cur, 0) / tempsArray.length
  console.log(iconUrl)
  return (
    <section className={classes.card}>
      <span className={classes.card__date}>{formatedDate}</span>
      <img
        src={iconUrl}
        alt="weather"
        className={classes.card__img}
      />
      <span className={classes.card__temperature}>{medianTemp.toFixed()}°</span>
    </section>
  )
}

export default SliderCard
