import React, { FC } from 'react'
import classes from './styles.module.scss'
import image from '../../assests/Placeholder/Academy-Weather-bg160.svg'

interface Props { }

const EmptyCard: FC<Props> = () => {
  return (
    <div className={classes['empty-card']}>
      <img
        className={classes['empty-card__image']}
        src={image}
        alt="make a choice" />
      <span
        className={classes['empty-card__text']}
      >
        Fill in all the fields and the weather will be displayed
      </span>
    </div>
  )
}

export default EmptyCard
