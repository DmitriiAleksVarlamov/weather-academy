import React, { FC } from 'react'
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper from 'react-id-swiper'
import SwiperCore, { Navigation, A11y } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import SingleSlide from '../SingleSlide'
import { useAppSelector } from '../../app/hooks'
import classes from './styles.module.scss'
import Spinner from '../Spinner'

SwiperCore.use([Navigation, A11y])

interface Props { }

const Slider: FC<Props> = () => {
  const { daily, status } = useAppSelector(store => store.sliderSlice)
  if (status === 'loading') return <Spinner />

  return (
    <div className={classes['sl-container']}>
      <Swiper
        spaceBetween={16}
        slidesPerView={'auto'}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          325: {
            slidesPerView: 1
          },
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
