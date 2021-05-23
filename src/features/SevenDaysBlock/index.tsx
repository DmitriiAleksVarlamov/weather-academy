import React, { FC, useState, useEffect } from 'react'
import CitiesSelect from '../CitiesSelect'
import Slider from '../Slider'
import WeatherCard from '../WeatherCard'
import classes from './styles.module.scss'
import { getSevenDaysForecast } from '../../app/sliderSlice'
import { useAppDispatch } from '../../app/hooks'
import { useDispatch } from 'react-redux'

interface ICoordinates {
  lat: number;
  lon: number;
}

interface ISelectedCity {
  name: string;
  coordinates: ICoordinates;
}

const SevenDaysBlock: FC = () => {
  const [value, setValue] = useState<string>('')
  const [coordinates, setCoordinates] = useState<ICoordinates | null>()
  const dispatch = useDispatch()

  useEffect(() => {
    if (value && coordinates) {
      dispatch(getSevenDaysForecast(coordinates))
    }
  }, [value])

  const onChangeHandler = (obj: ISelectedCity) => {
    const { name, coordinates } = obj
    setValue(name)
    setCoordinates(coordinates)
  }

  return (
    <WeatherCard
      title="7 Days Forecast"
    >
      <form className={classes.form}>
        <CitiesSelect value={value} changeHandler={onChangeHandler} />
      </form>
      <Slider />
    </WeatherCard>
  )
}

export default SevenDaysBlock
