import React from 'react';
import './styles/Header.scss'
import img_call from './img/call.png';
import img_email from './img/email.png';

function Header() {
    return (
        <div className="header">
                <div className="siteMenu">
                    <div className="siteName">MyAppSite</div>
                    <div className="siteItems">
                        <div><a href="#">Home</a></div>
                        <div><a href="#">Documentation</a></div>
                        <div><a href="#">Gallery</a></div>
                        <div><a href="#">Help</a></div>
                        <div><a href="#">About</a></div>
                    </div>
                </div>
                <div className="siteContacts">
                    <div class="phoneNumber">
                        <img src={img_call} alt="" />
                        <a href="#">8-800-555-3535</a>
                    </div>
                    <div class="emailAdress">
                        <img src={img_email} alt="" />
                        <a href="#">myadress@gmail.com</a>
                    </div>
                </div>
        </div>
    );
}

export default Header;