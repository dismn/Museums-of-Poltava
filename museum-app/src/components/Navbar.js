import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./img/logo.png";
import line from "./img/line.svg";
import '../components/Navbar.scss';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav">
            <Link to='/'><img className="logo" src={logo} alt="Logo" /></Link>
            <img src={line} alt="Line" className="line" />
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/about"><button className="nav-button">ПРО САЙТ</button></Link>
                <Link to="/gallery"><button className="nav-button">ГАЛЕРЕЯ</button></Link>
                <Link to="/news"><button className="nav-button">НОВИНИ</button></Link>
                <Link to="/contacts"><button className="nav-button end">КОНТАКТИ</button></Link>
            </div>
            <div className="burger" onClick={toggleMenu}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
        </div>
    );
}

export default Navbar;
