import React from 'react';
import './styles/Header.scss'
import img_call from './img/call.png';
import img_email from './img/email.png';

function Header() {
    return (
        <div className="header">
            <div className="header-leftbar">
                <div className="header-site-title">MyAppSite</div>
                <ul className="header-site-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            <div className="header-rightbar">
                <div class="phone-number">
                    <img src={img_call} alt="" />
                    <a href="#">8-800-555-3535</a>
                </div>
                <div class="email-address">
                    <img src={img_email} alt="" />
                    <a href="#">myadress@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Header;