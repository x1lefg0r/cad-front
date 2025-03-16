import React, { useState } from "react";

import '../styles/projects.css'
// import ProjectCard from '../components/ProjectCard';
import kot from '../assets/kot.webp'
import KeepMountedModal from "../components/ModalCard";

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='cnt'>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start", gap:"20px", width: "100%", alignItems:"center"}}>
                <div className='projcard'>
                    <img src={kot} alt="" style={{width:"200px"}}/>
                    <div className='textproj'>
                        <p className='Jura'>Название проекта</p>
                        <p className='Jura'>Описание проекта</p>
                        <button className="project-button" onClick={() => setIsOpen(true)}>Подробнее</button>
                    </div>
                </div>
            </div>
            <KeepMountedModal open={isOpen} handleClose={() => setIsOpen(false)} header={"Заголовок"} text={"Описание"}/>
        </div>    
    );
};


export default Projects;
