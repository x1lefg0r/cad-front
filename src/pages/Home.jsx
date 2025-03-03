
import bgy from '../assets/bgy.webp'
import '../styles/home.css'
import team from '../assets/team.avif'
import Projects from '../components/EffectCoverflow.jsx'
import db from '../assets/db.json'
import TeamCard from '../components/TeamCard';

const Home = () => {
    return (
        <div className="homeContainer">
            <div className='first'>
            <img src={bgy} alt="" style={{position:'absolute', zIndex: '-1'}}/>
                <div className='title'>
                    <p>Создавай</p>
                    <p>Автоматизируй</p>
                    <p>Программируй</p>
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
                    <img src={team} alt="" style={{width: '600px'}}/>
                </div>
            </div>
            <div className="third">
                <div>
                    <p className="Dela">Проекты</p>
                    <Projects data={db}/>
                </div>
            </div>
            <div>
                <div className="fourth">
                    <TeamCard/>
                </div>
            </div>
        </div>
    );
};

export default Home;