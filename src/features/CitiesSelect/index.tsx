import React, { FC, useState, ChangeEvent } from 'react'
import cities from './citiesArray'
import classes from './styles.module.scss'

interface IProps {
  value: string;
  changeHandler: (args: any) => void;
}

const CitiesSelect: FC<IProps> = ({ value, changeHandler }) => {
  return (
    <select
      className={classes.select}
      value={value}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target
        const [filtered] = cities.filter(city => city.name === value)
        changeHandler(filtered)
      }}
    >
      <option hidden value="">Select city</option>
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
