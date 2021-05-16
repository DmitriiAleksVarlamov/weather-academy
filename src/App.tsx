import React, { FC } from 'react'
import classes from './styles.module.scss'
import AppHeader from './features/AppHeader'
import AppContent from './features/AppContent'

interface Props { }

export const App: FC<Props> = () => {
  return (
    <div className={classes.container}>
      <AppHeader />
      <AppContent />
    </div>
  )
}

export default App
