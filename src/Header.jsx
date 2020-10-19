import React from 'react';
import './styles/Header.scss'
import img_call from './img/call.png';
import img_email from './img/email.png';

function Header() {
    return (
        <div className="header">
            <div className="header-leftbar">
                <div className="header-site-title">MyAppSite</div>
                <nav className="header-site-menu">
                    <a href="#">Home</a>
                    <a href="#">Documentation</a>
                    <a href="#">Gallery</a>
                    <a href="#">Help</a>
                    <a href="#">About</a>
                </nav>
            </div>
            <div className="header-rightbar">
                <div class="phone-number">
                    <a src={img_call} alt="" />
                    <a href="#">8-800-555-3535</a>
                </div>
                <div class="email-address">
                    <a src={img_email} alt="" />
                    <a href="#">myadress@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Header;