import React from 'react';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './EffectCoverflow.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ProjectsCoverflow = (props) => {
    const navigate = useNavigate();
    const data = props.data.projects;

    const handleClick = (projectId) => {
        navigate("/projects", { state: { projectId } });
    };

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
            paginationType={'progressbar'}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >    
            {data.map((project) => (
                <SwiperSlide key={project.id} onClick={() => handleClick(project.id)} style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}>
                    <div className='boxproject'>
                        <img
                            src={`/assets/${project.image}`} 
                            alt={project.name}
                            style={{ height: "100%", width: "100%", position: "absolute", zIndex: -1, objectFit: "cover" }}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", position: "absolute", zIndex: "997", backgroundColor: "rgba(0, 0, 0, 0.28)" }}>
                        <h1 className="nameofproject">{project.name}</h1>
                        <p className="descofproject">{project.description}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProjectsCoverflow;
