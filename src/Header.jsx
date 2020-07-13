import React from 'react';
import './styles/Header.scss'
import img_call from './img/call.png';
import img_email from './img/email.png';

function Header() {
    return (
        <header className="header">
                <div className="site_menu">
                    <div className="site_name">MyAppSite</div>
                    <ul className="site_items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div className="site_contacts">
                    <div id="phonenumber">
                        <img src={img_call} alt="" />
                        <a href="#">8-800-555-3535</a>
                    </div>
                    <div id="emailaddress">
                        <img src={img_email} alt="" />
                        <a href="#">myadress@gmail.com</a>
                    </div>
                </div>
        </header>
    );
}

export default Header;