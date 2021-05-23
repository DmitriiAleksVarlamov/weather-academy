import React, { FC } from 'react'
import classes from './styles.module.scss'

const ErrorMessage: FC = () => {
  return (
    <div className={classes.message}>
      OOOPS!!Something was going wrong...
    </div>
  )
}

export default ErrorMessage
