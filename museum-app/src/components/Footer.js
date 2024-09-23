import "./Footer.scss";
import logo from "./img/logo.png";
import { Link } from 'react-router-dom';
function Footer () {
    return (
        <div className="footer">
            <img className="footer-logo" src={logo}></img>
            <div className="footer-links">
            <Link to="/about"><a className="footer-link">ПРО САЙТ</a></Link>
            <Link to="/gallery"><a className="footer-link">ГАЛЕРЕЯ</a></Link>
            <Link to="/news"><a className="footer-link">НОВИНИ</a></Link>
            <Link to="/contscts"><a className="footer-link">КОНТАКТИ</a></Link>
            </div>
            <h5>2024 Semeniuta D. Всі права захищені.</h5>
        </div>
    )
}

export default Footer;
