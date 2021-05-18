import classes from './styles.module.scss'
import React, { FC } from 'react'
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper from 'react-id-swiper'
import SwiperCore, { Navigation, A11y } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import SliderCard from '../SliderCard'
import { useAppSelector } from '../../app/hooks'

SwiperCore.use([Navigation, A11y])

interface Props { }

// const auto: 'auto' = 'auto'

const UserSlider: FC<Props> = () => {
  const { daily } = useAppSelector(store => store.appSlice)
  return (
    <div className={classes.swiper}>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          daily.map(forecast => {
            const { dt, weather, temp } = forecast
            return <SwiperSlide className={classes.slide}>
              <SliderCard
                date={dt}
                temperature={temp}
                icon={weather[0].icon}
              />
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  )
}

export default UserSlider
