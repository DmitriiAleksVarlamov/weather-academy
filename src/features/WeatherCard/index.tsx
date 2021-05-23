import React, { FC } from 'react'
import classes from './styles.module.scss'

const cities: Array<string> = ['Самара', 'Тольятти', 'Саратов', 'Казань', 'Краснодар']

interface IProps {
  title: string;
  children?: React.ReactChild | React.ReactNode;
}

const WeatherCard: FC<IProps> = ({ title, children }) => {
  return (
    <article className={classes.container}>
      <h2 className={classes.container__title}>{title}</h2>
      {children}
    </article>
  )
}

export default WeatherCard
