import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './EffectCoverflow.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Projects = (props) => {
    const data = props.data.projects
    console.log(data)
  return (
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((data, id) => (
          <SwiperSlide key={id}>
            <img
                src={`/assets/${data.image}`} 
                alt=""
                style={{"height":"100%", "width":"100%", "position":"absolute", zIndex: -1, objectFit: "cover"}}
            />
            <h1 style={{zIndex: 999}}>{data.name}</h1>
            <p style={{zIndex: 999}}>{data.description}</p> 
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

export default Projects;