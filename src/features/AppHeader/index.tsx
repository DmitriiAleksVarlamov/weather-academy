import React, { FC } from 'react'
import classes from './styles.module.scss'
import HeaderText from './HeaderText'

const titles: Array<string> = ['Weather', 'forecast']

interface Props { }

const AppHeader: FC<Props> = () => {
  return (
        <header className={classes.header}>
            {
                titles.map((title, i) => (
                    <HeaderText key={i} text={title} />
                ))
            }
        </header>
  )
}

export default AppHeader
