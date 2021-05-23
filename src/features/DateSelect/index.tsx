import React, { FC, ChangeEvent } from 'react'
import classes from './styles.module.scss'
import { subDays, getUnixTime, format, startOfDay, fromUnixTime } from 'date-fns'

interface IProps {
  value: number;
  changeDate: (date: string) => void;
}

const DateSelect: FC<IProps> = ({ value, changeDate }) => {
  const daysList = [0, 1, 2, 3, 4].map(day => {
    const startOfCurDay = startOfDay(subDays(new Date(), day))
    return getUnixTime(startOfCurDay)
  })

  return (
    <select
      className={classes.select}
      value={value}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        changeDate(event.target.value)
      }}
    >
      <option hidden value="">Select date</option>
      {
        daysList.map(day => {
          return <option
            key={day}
            value={day}
            className={classes.select__element}
          >
            {format(fromUnixTime(day), 'dd-MMMM-yyyy')}
          </option>
        })
      }
    </select>
  )
}

export default DateSelect
