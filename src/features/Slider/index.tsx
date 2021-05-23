import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, A11y } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import SingleSlide from '../SingleSlide'
import { useAppSelector } from '../../app/hooks'
import classes from './styles.module.scss'
import Spinner from '../Spinner'
import EmptyCard from '../EmptyCard'
import ErrorMessage from '../ErrorMessage'

SwiperCore.use([Navigation, A11y])

const Slider: FC = () => {
  const { daily, status } = useAppSelector(store => store.sliderSlice)

  // Обработка загрузки, ошибок и пустой карточки
  if (status === 'failed') return <ErrorMessage />
  if (status === 'loading') return <Spinner />
  if (!daily.length) return <EmptyCard />

  return (
    <div className={classes['sl-container']}>
      <Swiper
        spaceBetween={16}
        slidesPerView={'auto'}
        navigation
        breakpoints={{
          819: {
            slidesPerView: 3
          }
        }}
      >
        {
          daily.map((forecast) => {
            const { dt, weather, temp } = forecast
            return <SwiperSlide className={classes['sl-container__slide']} key={dt}>
              <SingleSlide
                date={dt}
                temperature={temp}
                icon={weather[0].icon}
              />
            </SwiperSlide>
          })
        }
      </Swiper>
    </div >
  )
}

export default Slider
