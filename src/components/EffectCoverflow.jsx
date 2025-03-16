import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './EffectCoverflow.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ProjectsCoverflow = (props) => {
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
          <SwiperSlide key={id} style={{position:"relative", overflow: "hidden"}}>
          <div className='boxproject'>
            <img
                src={`/assets/${data.image}`} 
                alt=""
                style={{"height":"100%", "width":"100%", "position":"absolute", zIndex: -1, objectFit: "cover"}}
            />
          </div>
          <div style = {{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"100%", height:"100%", position:"absolute", zIndex: "997", backgroundColor:"rgba(0, 0, 0, 0.18)"}}>
            <h1 className="nameofproject">{data.name}</h1>
            <p className="descofproject">{data.description}</p> 
          </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

export default ProjectsCoverflow;