import React, { FC } from 'react'
import cities from './citiesArray'
import classes from './styles.module.scss'

interface Props { }

const CitiesSelect: FC<Props> = () => {
  return (
    <select className={classes.select}>
      {
        cities.map(city => {
          const { name, coordinates } = city
          return <option
            key={name}
            value={name}
            {...coordinates}
            className={classes.select__element}
          >
            {name}
          </option>
        })
      }
    </select>
  )
}

export default CitiesSelect
