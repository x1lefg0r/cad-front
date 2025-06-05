import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './EffectCoverflow.css';
import {Navigation} from 'swiper/modules';

const ProjectsCoverflow = props => {
  const navigate = useNavigate();
  const data = props.data?.projects || [];

  const handleClick = useCallback(
    projectId => {
      navigate('/projects', {state: {projectId}});
    },
    [navigate],
  );

  if (data.length === 0) {
    return <div className="loading">Loading projects...</div>;
  }

  return (
    <Swiper
      key={data.length}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      modules={[Navigation]}
      navigation={true}
      className="mySwiper"
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 5,
        },
      }}
    >
      {data.map(project => (
        <SwiperSlide
          key={project.id}
          onClick={() => handleClick(project.id)}
          className="project-slide"
        >
          <div className="slide-background">
            <img
              src={`/cad-front/assets/${project.image}`}
              alt={project.name}
              loading="lazy"
            />
          </div>
          <div className="slide-overlay">
            <h1 className="nameofproject">{project.name}</h1>
            <p className="descofproject">{project.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsCoverflow;
