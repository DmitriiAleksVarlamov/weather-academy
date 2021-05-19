import REact, { FC } from 'react'
import classes from './styles.module.scss'

interface Props { }

const DateInput: FC<Props> = () => {
  return (
    <input type="date" className={classes.input} />
  )
}

export default DateInput
