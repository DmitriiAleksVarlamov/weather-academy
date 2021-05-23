import React, { FC } from 'react'
import classes from './styles.module.scss'
import { format } from 'date-fns'
import { ITemp } from '../../app/sliderSlice'
import fromUnixTime from 'date-fns/fromUnixTime'

interface IProps {
  date: number;
  temperature: ITemp;
  icon: string;
}

const SingleSlide: FC<IProps> = ({ date, temperature, icon }) => {
  const formatedDate = format(new Date(fromUnixTime(date)), 'dd MMMM yyyy')
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
  const tempsArray = Object.values(temperature)
  const medianTemp = tempsArray.reduce((sum, cur) => sum += cur, 0) / tempsArray.length

  return (
    <section className={classes.slide}>
      <span className={classes.slide__date}>{formatedDate}</span>
      <img
        src={iconUrl}
        alt="forecast"
        className={classes.slide__image}
      />
      <span className={classes.slide__temperature}>{medianTemp.toFixed()}°</span>
    </section>
  )
}

export default SingleSlide
