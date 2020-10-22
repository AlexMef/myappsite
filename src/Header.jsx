import React from 'react';
import {NavLink, BrowserRouter} from 'react-router-dom';
import './styles/Header.scss'
import img_call from './img/call.png';
import img_email from './img/email.png';

function Header() {
    return (
        <div className="header">
            <div className="header-leftbar">
                <div className="header-site-title">
                    <NavLink to="/home">MyAppSite</NavLink>
                    </div>
                <nav className="header-site-menu">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/docs">Documentation</NavLink>
                    <a href="#">Gallery</a>
                    <a href="#">Help</a>
                    <a href="#">About</a>
                </nav>
            </div>
            <div className="header-rightbar">
                <div class="phone-number">
                    <img className="phone-number-img" src={img_call} alt="" />
                    <a className="phone-number-value" href="#">8-800-555-3535</a>
                </div>
                <div class="email-address">
                    <img className="email-address-img" src={img_email} alt="" />
                    <a className="email-address-value" href="#">myadress@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Header;