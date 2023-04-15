import React, { Fragment } from 'react'
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1 from "../asset/logo1.jpg";
import slide2 from "../asset/pic1 (2).jpg"
import slide3 from "../asset/pic1 (3).jpg"

const Slider = () => {
  return (
    <Fragment>
        <div className="portfolio">
        <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
        >
            <SwiperSlide>
                <img src={slide1} alt="slide1-img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="slide2-img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="slide3-img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="slide3-img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="slide3-img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="slide3-img" />
            </SwiperSlide>
        </Swiper>
        </div>
        
    </Fragment>
  )
}

export default Slider