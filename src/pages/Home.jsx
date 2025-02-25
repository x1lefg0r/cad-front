
import bgy from '../assets/bgy.webp'
import '../styles/home.css'
import team from '../assets/team.avif'
import Projects from '../components/EffectCoverflow'
import db from '../assets/db.json'

const Home = () => {
    return (
        // <div className="homepage">
        //     <section>
        //     <div className="textContainer">
        //         <div className="mainTitle">
        //             <p className="Dela">Создавай</p>
        //             <p className="Dela">Автоматизируй</p>
        //             <p className="Dela">Проектируй</p>
        //             <p className="Dela">Разрабатывай</p>
        //         </div>
        //         <p className="Jura">Центр САПР разработки<br/>Московского Политехнического Университета</p>
        //     </div>
        //     </section>
        //     <section>
                
        //     </section>
        //     <section>
        //         <div className="projectsContainer">
        //             <p className="Dela">Проекты</p>
        //             {/* <Projects data={db}/> */}
        //         </div>
        //     </section>
        // </div>
        <div className="homeContainer">
            <div className='first'>
            <img src={bgy} alt="" style={{position:'absolute', zIndex: '-1'}}/>
                <div className='title'>
                    <p>Создавай</p>
                    <p>Автоматизируй</p>
                    <p>Проектируй</p>
                    <p>Разрабатывай</p>
                </div>
                <p className="Jura">Центр САПР разработки<br/>Московского Политехнического Университета</p>
            </div>
            <div className='second'>
                <div className='box'>
                    <div className='text'>
                        <p className='Dela'>О нас</p>
                        <p className='Optima'>Наш центр имеет уникальные команды, работающие над разработкой интересных и востребованных проектов. 
                            Основная область нашей деятельности  
                            - работа с CAD системами и движками, программирование, инженерные задачи.
                            С нами работают известные Российские компании, многие из участников уже обустроены.
                        </p>
                    </div>
                    <img src={team} alt="" style={{width: '900px', margin:'40px', position:'relative'}}/>
                </div>
            </div>
            <div>
                <div className="projectsContainer">
                    <p className="Dela" style={{fontSize:"48px", margin:"60px"}}>Проекты</p>
                    <Projects data={db}/>
                </div>
            </div>
        </div>
    );
};

export default Home;