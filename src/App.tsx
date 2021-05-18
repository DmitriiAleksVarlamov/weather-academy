import React, { FC, useEffect } from 'react'
import classes from './styles.module.scss'
import AppHeader from './features/AppHeader'
import AppContent from './features/AppContent'
import { getSevenDayForecast } from './app/appSlice'
import { useAppDispatch } from './app/hooks'

interface Props { }

export const App: FC<Props> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => { dispatch(getSevenDayForecast()) }, [])

  return (
    <div className={classes.container}>
      <AppHeader />
      <AppContent />
      <footer className={classes.footer}>с любовью от mercury development</footer>
    </div>
  )
}

export default App
