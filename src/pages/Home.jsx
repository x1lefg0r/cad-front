
import bghome from '../assets/bghome.webp'
import bg2 from '../assets/bg2.webp'
import '../styles/home.css'
import img3 from '../assets/img3.png'
import ProjectsCoverflow from '../components/EffectCoverflow.jsx'
import db from '../assets/db.json'
import TeamCard from '../components/TeamCard';
import eng from '/assets/eng.png'
import anim from '/assets/anim.png'
import vr from '/assets/vr.png'
import kb from '/assets/kb.png'
import c3d from '/assets/c3d.png'
import scp from '/assets/scp.png'
// import Footer from '../components/Footer';


const Home = () => {
    return (
        <div className="homeContainer">
            <div className='first'>
                <img src={bghome} alt="" style={{position:'static', zIndex: '-1', objectFit: 'cover', width:"100%", height:"100%", overflow: 'hidden'}}/>
                <div className="firsttext">
                    <div className='title'>
                        <p>Создавай</p>
                        <p>Автоматизируй</p>
                        <p>Программируй</p>
                        <p>Разрабатывай</p>
                    </div>
                    <p className="uppermain">Центр САПР разработки<br/>Московского Политехнического Университета</p>
                </div>
            </div>
            <div className='second'>
                <div className='box'>
                    <div className='text'>
                        <p className='aboutus'>О нас</p>
                        <p className='optimaaboutus'>Наш центр имеет уникальные команды, работающие над разработкой интересных и востребованных проектов. 
                            Основная область нашей деятельности  
                            - работа с CAD системами и движками, программирование, инженерные задачи.
                            С нами работают известные Российские компании, многие из участников уже обустроены.
                        </p>
                    </div>
                    <img src={img3} alt="" className='usualimage'/>
                </div>
            </div>
            <div className="third">
                <img src={bg2} alt="" style={{position:'static', zIndex: '-1', marginTop: '-200px', width:"100%", height:"100%", overflow: 'hidden'}}/>
                <p className="Dela" style={{margin: '80px', position:"absolute"}}>Проекты</p>
                <div className="projectsContainer"><ProjectsCoverflow data={db}/></div>
            </div>
                <div className="fourth">
                    <p className="Dela" style={{marginBottom: '40px'}}>Команды</p>
                    <div className="teamsContainer">
                        <TeamCard logo={eng} title={"Разработка инженерного программного обеспечения - команда занимается созданием инструментов, позволяющих улучшать или дополнять отечественные САПР - nanoCAD и Компас-3D - тем самым упрощать работу конструкторов"}/>
                        <TeamCard logo={anim} title={"Студия анимации - занимается анимированием готовых моделей, созданием моделей и анимаций любой сложности, а также подготовкой учебного материала по работе в Blender"}/>
                        <TeamCard logo={vr} title={"VR concept - работа с одноименной платформой: создание 3D-моделей в Blender, их интеграция в виртуальную среду и программирование функций на Python"}/>
                        <TeamCard logo={c3d} title={"C3D - команда разрабатывает программы на основе геометрического ядра C3D от C3D Labs, создает инструменты для работы с 3D-геометрией. Работа в команде позволяет прокачать навыки в программировании, алгоритмах и инженерных разработках"}/>
                        <TeamCard logo={kb} title={"Конструкторское бюро - команда занимается конструированием и моделированием деталей и механизмов, тестированием эргономики САПР, разработкой учебно-методических пособий, а также созданием собственной конструкторской документации"}/>
                        <TeamCard logo={scp} title={"Цифровые прототипы - команда занимается созданием интерактивных инструкций для станков, принтеров и подобного управления, требующего сложных навыков управления и с высоким уровнем риска получения травм"}/>
                    </div>
                </div>
                {/* <Footer/> */}
        </div>
    );
};

export default Home;