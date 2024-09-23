import photoAboutSite from './img/headerRight3.png';
import "./AboutSite.scss";
import {Link} from 'react-router-dom';

function AboutSite () {
    return (
        <div className="about">
            <div className="about-desc">
                <h2 className='h2-about'>ЛАСКАВО ПРОСИМО!</h2>
                <p className='p-about'>
                Наш інформаційний портал створений з метою ознайомлення відвідувачів з багатою історією та культурою Полтавщини через призму її музейних колекцій. Тут ви знайдете цікаву інформацію про  музейні заклади регіону, їх експозиції, заходи та події. Ми пропонуємо можливість замовити екскурсію в музей, який Ви бажаєте відвідати. Для ознайомлення детальніше з музеями перейдіть в розділ “Галерея”
                </p>
                <Link to="/contacts">
                <button className="header-button1 btn-about">ЗАМОВИТИ ЕКСКУРСІЮ</button>
                </Link>
            </div>
        <img  className='photoAboutSite' src={photoAboutSite}></img>
        </div>
    )
}

export default AboutSite;