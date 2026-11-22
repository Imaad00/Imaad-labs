import React, { useContext } from "react";
import './Header.css';
import usFlag from '../../img/us.jpg';
import saudiFlag from '../../img/Saudi.jpg';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

const HeaderPage = () => {
    // Buttom language
    const language = useContext(langContext);
    // Dropdown menu
    const dropdownmenu = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activate");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activate")
            } else document.querySelector(".site-header").classList.remove("activate")

            navbar.classList.remove("activate")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={dropdownmenu}></div>

            <NavLink className="logo" to="/" >
                <p>=(<span>Imaad Sharieff </span>)</p>
            </NavLink>

            <nav className="navbar">
                <NavLink to="/" offset={-150} duration={500}>
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </NavLink>
                <NavLink to="/about" offset={-150} duration={500}>
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </NavLink>
                <NavLink to="/service" offset={-150} duration={500}>
                    <FormattedMessage
                        id='experience'
                        defaultMessage='Experiences'
                    />
                </NavLink>
                <NavLink to="/project" offset={-150} duration={500}>
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </NavLink>
                <div id="buttons">
                    <img
                        onClick={() => language.selectLanguage('en-US')}
                        src={usFlag}
                        alt="United States"
                    />
                    <img
                        onClick={() => language.selectLanguage('ar-SA')}
                        src={saudiFlag}
                        alt="المملكة العربية السعودية"  // Saudi Arabia in Arabic
                    />
                </div>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(HeaderPage);