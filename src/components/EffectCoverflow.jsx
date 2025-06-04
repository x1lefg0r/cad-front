import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './EffectCoverflow.css';
import {Navigation} from 'swiper/modules';

const ProjectsCoverflow = props => {
  const navigate = useNavigate();
  const data = props.data.projects;

  const handleClick = useCallback(projectId => {
    navigate('projects', {state: {projectId}});
  }, []);

  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      modules={[Navigation]}
      navigation={true}
      className="mySwiper"
      loop={true}
    >
      {data.map(project => (
        <SwiperSlide
          key={project.id}
          onClick={() => handleClick(project.id)}
          className="project-slide"
        >
          <div className="slide-background">
            <img src={`assets/${project.image}`} alt={project.name} />
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
