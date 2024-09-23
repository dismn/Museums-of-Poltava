import React from 'react';
import './Slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import SwiperCore  from 'swiper';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import btnSlider from "./img/btnSlider.png";
import line3 from "./img/Line 3.png";

import slide_image_1 from "./img/slideImage1.png"
import slide_image_2 from "./img/imageSlider2.jpg"
import slide_image_3 from "./img/imageSlider3.jpg"
import slide_image_4 from "./img/imageSlider4.jpg"
import slide_image_5 from "./img/imageSlider5.jpg"

// Використовуйте SwiperCore для підключення модулів
SwiperCore.use([EffectCoverflow, Autoplay]);

function Slider() {
    return (
    <div className='slider'>
        <div className='container'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="swiper-container"
            >
                <SwiperSlide>
                    <img className='slide-images' src={slide_image_1} alt="slide1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='slide-images' src={slide_image_2} alt="slide2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='slide-images' src={slide_image_3} alt="slide3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='slide-images' src={slide_image_4} alt="slide4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='slide-images' src={slide_image_5} alt="slide5" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    )
}

export default Slider;