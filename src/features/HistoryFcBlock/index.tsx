import React, { FC, useState, useEffect } from 'react'
import classes from './styles.module.scss'
import CitiesSelect from '../CitiesSelect'
import PastTimeCard from '../PastTimeCard'
import WeatherCard from '../WeatherCard'
import DateSelect from '../DateSelect'
import { getHistoryForecast } from '../../app/pastTimeSlice'
import { useAppDispatch } from '../../app/hooks'

interface ICoordinates {
  lat: number;
  lon: number;
}

interface ISelectedCity {
  name: string;
  coordinates: ICoordinates;
}

const HistoryFcBlock: FC = () => {
  const [value, setValue] = useState<string>('')
  const [coordinates, setCoordinates] = useState<ICoordinates | null>()
  const [date, setDate] = useState<string>('')
  const dispatch = useAppDispatch()

  const onHandleChange = (obj: ISelectedCity) => {
    const { name, coordinates } = obj
    setValue(name)
    setCoordinates(coordinates)
  }

  useEffect(() => {
    if (value && date && coordinates) {
      const requestData = { ...coordinates, date: +date }
      dispatch(getHistoryForecast(requestData))
    }
  }, [value, date])

  return (
    <WeatherCard
      title="Forecast for a Date in the Past"
    >
      <form className={classes.form}>
        <CitiesSelect value={value} changeHandler={onHandleChange} />
        <DateSelect value={+date} changeDate={(date: string) => setDate(date)} />
      </form>
      <PastTimeCard />
    </WeatherCard>
  )
}

export default HistoryFcBlock
