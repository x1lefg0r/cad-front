import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './EffectCoverflow.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Projects = (props) => {
    // const data = JSON.parse(props)
    // console.log(props.data.projects)
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
            <h1>{data.name}</h1>
            <img src={data.image} alt="" style ={{"height":"40px", "width":"40px"}}/>
            <p>{data.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

export default Projects;