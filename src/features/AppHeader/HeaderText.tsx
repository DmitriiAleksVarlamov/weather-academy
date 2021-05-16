import React, { FC } from 'react'
import classes from './styles.module.scss'

interface Props {
    text: string;
}

const HeaderText: FC<Props> = ({ text }) => {
  return (
        <h1 className={classes.header__text}>{text}</h1>
  )
}

export default HeaderText
