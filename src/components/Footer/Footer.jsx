import React from 'react';
import './Footer.css';

/* Multi language */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let date = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by Imaad'
                        />
                    </p>
                    <p>&copy; {date}. All Rights Reserved.</p>
                </div>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/mohammed-imaad-sharieff-08891a238/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Imaad00" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/imaad_sharieff/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);