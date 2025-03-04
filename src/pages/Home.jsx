
import bghome from '../assets/bghome.webp'
import bg2 from '../assets/bg2.webp'
import '../styles/home.css'
import img3 from '../assets/img3.png'
import Projects from '../components/EffectCoverflow.jsx'
import db from '../assets/db.json'
import TeamCard from '../components/TeamCard';
import eng from '/assets/eng.png'
import anim from '/assets/anim.png'
import vr from '/assets/vr.png'
import kb from '/assets/kb.png'
import c3d from '/assets/c3d.png'


const Home = () => {
    return (
        <div className="homeContainer">
            <div className='first'>
                <img src={bghome} alt="" style={{position:'static', zIndex: '-1', objectFit: 'cover', width:"100%", height:"100%"}}/>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', position: 'absolute'}}>
                    <div className='title'>
                    <p>Создавай</p>
                    <p>Автоматизируй</p>
                    <p>Программируй</p>
                    <p>Разрабатывай</p>
                    </div>
                    <p className="Jura" style={{marginTop: '50px', marginLeft: '60px', fontSize: '36px'}}>Центр САПР разработки<br/>Московского Политехнического Университета</p>
                </div>
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
                    <img src={img3} alt="" style={{width: '800px'}}/>
                </div>
            </div>
            <div className="third">
                <div>
                    <p className="Dela">Проекты</p>
                    <img src={bg2} alt="" style={{position:'absolute', zIndex: '-1', marginTop: '-200px', width:"1880px"}}/>
                    <Projects data={db}/>
                </div>
            </div>
                <div className="fourth">
                    <p className="Dela" style={{marginBottom: '40px'}}>Команды</p>
                    <div className="teamsContainer">
                        <TeamCard logo={eng} title={"Разработка инженерного программного обеспечения - команда занимается изучением и созданием API"}/>
                        <TeamCard logo={anim} title={"Студия анимации - команда моделирует и создает анимацию в популярных программах"}/>
                        <TeamCard logo={vr} title={"VR concept - команда разрабатывает проекты связанные с виртуальной реальностью"}/>
                        <TeamCard logo={c3d} title={"C3D - команда работает с ядрами для CAD и 3D моделирования"}/>
                        <TeamCard logo={kb} title={"Конструкторское бюро - команда занимается конструированием и моделированием деталей и механизмов"}/>
                    </div>
                </div>
        </div>
    );
};

export default Home;