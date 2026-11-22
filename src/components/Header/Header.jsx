import React, { useContext } from "react";
import './Header.css';
import usFlag from '../../img/us.jpg';
import saudiFlag from '../../img/Saudi.jpg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

const Header = () => {
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

            <NavLink className="logo" to="/">
                <p>(<span>Imaad Sharieff</span>)</p>
            </NavLink>

            <nav className="navbar">
                <Link to="start" spy={true} offset={-150} href="#start">
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to="about-me" spy={true} offset={-150} href="#about-me">
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </Link>
                <Link to="experiences" spy={true} offset={-150} href="#experiences">
                    <FormattedMessage
                        id='experience'
                        defaultMessage='Experiences'
                    />
                </Link>
                <Link to="projects" spy={true} offset={-150} href="#projects">
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </Link>
                <Link to="contacts" spy={true} offset={-150} href="#contacts">
                    <FormattedMessage
                        id='contact'
                        defaultMessage='Contact'
                    />
                </Link>
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

export default React.memo(Header);