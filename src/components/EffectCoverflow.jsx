import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './EffectCoverflow.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Projects = (props) => {
    const data = props.data.projects
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
          <div style={{boxShadow: "3px 34px 77px 29px rgb(21, 22, 22) inset", zIndex: "996"}}>
            <img
                src={`/assets/${data.image}`} 
                alt=""
                style={{"height":"100%", "width":"100%", "position":"absolute", zIndex: -1, objectFit: "cover"}}
            />
          </div>
            
            <h1 style={{zIndex: 999, fontSize: "36px", color:"white"}}>{data.name}</h1>
            <p style={{zIndex: 999, fontSize: "24px", color:"white", margin:"10px", textShadow:"0px 3px 10px rgb(255, 174, 0)"}}>{data.description}</p> 
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

export default Projects;