import "./Header.scss";
import headerButton from "./img/header-button.png";
import headerRight1 from "./img/headerRight1.png";
import headerRight2 from "./img/headerRight2.png";
import headerRight3 from "./img/headerRight3.png";
import headerRight4 from "./img/headerRight4.png";
import backgroundLine from "./img/background-line.png";
import { Link } from 'react-router-dom';

function Header () {
    return (
    <div className="header">
    <div className="header-left">
            <h1>МУЗЕЇ <br/> <span>ПОЛТАВЩИНИ</span></h1>
            <img className="backgroundLine" src={backgroundLine}></img>
        <div className="header-buttons">
            <Link to='/gallery'><button className="header-button1">ПЕРЕГЛЯНУТИ ГАЛЕРЕЮ</button></Link>
            <Link to='/news'><button className="header-button2">ПЕРЕГЛЯНУТИ НОВИНИ</button></Link>
        </div>
        <div className="header-description">
            <p>
            Ласкаво просимо на інформаційний портал про музеї Полтавщини! Тут ви знайдете інформацію про музеї Полтави та Полтавської області, що розкривають багату історію та культурну спадщину цього регіону. Плануйте свою подорож по музеях Полатвщини разом з нами та зануртесь у світ цікавої та неповторної культурної спадщини!
            </p>
        </div>
    </div>

    <div className="header-right">
        <div className="right1"> 
        <img className="photo1" src={headerRight1}></img>
        <img className="photo3" src={headerRight3}></img>
        </div>
        <div className="right2">
        <img className="photo2" src={headerRight2}></img>
        <img className="photo4" src={headerRight4}></img>
        </div>
    </div>
    </div>
    )
}

export default Header;