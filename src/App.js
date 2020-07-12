import React from 'react';
import img_call from './img/call.png';
import img_email from './img/email.png';
import slider_img from './img/smartphone.png';
import './scss/App.scss';

function App() {
    return (
        <div className="root">
            <header className="header">
                <div className="wrapper">
                    <div className="site-menu">
                        <div id="site-name">MyAppSite</div>
                        <ul id="site-items">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                    <div className="site-contacts">
                        <div id="phonenumber">
                            <img src={img_call} alt="" />
                            <a href="#">8-800-555-3535</a>
                        </div>
                        <div id="emailaddress">
                            <img src={img_email} alt="" />
                            <a href="#">myadress@gmail.com</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="content">
                {/* заглушка */}
                <div className="slider">
                    <img className="slider-image" src={slider_img} alt="" />
                </div>
                <div className="text-block">
                    <div className="text-title">Look at my app, my app is amazing</div>
                    <div className="text-article">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
                    Eius ratione magnam debitis doloremque impedit officiis quam <br></br>
                    perspiciatis quisquam aperiam, ipsum, officia amet commodi<br></br>
                            maxime porro dignissimos. Rem recusandae doloremque dolore.</div>
                </div>
                <div className=".text-menu"></div>
                <div className=".text-content"></div>
            </div>
        </div>
    );
}

export default App;