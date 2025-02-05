

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import appex from '../assets/appex.png'
import sopno from '../assets/sopno.png'
import sharetrip from '../assets/sharetrip.png'
import gozayaan from '../assets/gozayaan.jpg'
import daraz from '../assets/daraz.jpg'
import bata from '../assets/bata.webp'


import { Autoplay, Pagination } from 'swiper/modules';

const SwiperSlider = () => {
    return (
        <div className='px-2 md:px-3 xl:px-0'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper "
        
      >
        <SwiperSlide><img src={appex} alt="" className='h-[150px] md:h-[300px] lg:h-[450px] w-full rounded-3xl' /></SwiperSlide>
        <SwiperSlide><img src={sharetrip} alt="" className='h-[150px] md:h-[300px] lg:h-[450px] w-full rounded-3xl' /></SwiperSlide>
        <SwiperSlide><img src={gozayaan} alt="" className='h-[150px] md:h-[300px] lg:h-[450px] w-full rounded-3xl' /></SwiperSlide>
        <SwiperSlide><img src={bata} alt="" className='h-[150px] md:h-[300px] lg:h-[450px] w-full rounded-3xl' /></SwiperSlide>
        <SwiperSlide><img src={daraz} alt="" className='h-[150px] md:h-[300px] lg:h-[450px] w-full rounded-3xl' /></SwiperSlide>
        <SwiperSlide><img src={sopno} alt="" className='h-[150px] md:h-[300px] lg:h-[450px] w-full rounded-3xl' /></SwiperSlide>
      </Swiper>
    </div>
    );
};

export default SwiperSlider;