import React from 'react';
import './styles/InfoBlock.scss';

import refresh_btn from "./img/refresh-button.png";
import landscape from "./img/beautiful_landscape_web.jpg";

function InfoBlock() {
    return (
        <div className="content-infoblock">
            <div className="content-infoblock-text">Read more</div>
            <a className="content-infoblock-arrow" href="#">
                <img src={refresh_btn} alt="" />
            </a>

            <div className="content-infoblock-items">
                <div className="content-infoblock-item">
                    <img src={landscape} alt="" className="content-infoblock-item-img" />
                    <h1 className="content-infoblock-item-title">The article</h1>
                    <p className="content-infoblock-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque culpa perspiciatis, atque asperiores ad ipsum quam aspernatur a doloremque libero temporibus adipisci sit sequi consequatur porro commodi perferendis unde.
                    </p>
                </div>
                <div className="content-infoblock-item">
                    <img src={landscape} alt="" className="content-infoblock-item-img" />
                    <h1 className="content-infoblock-item-title">The article</h1>
                    <p className="content-infoblock-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque culpa perspiciatis, atque asperiores ad ipsum quam aspernatur a doloremque libero temporibus adipisci sit sequi consequatur porro commodi perferendis unde.
                    </p>
                </div>
                <div className="content-infoblock-item">
                    <img src={landscape} alt="" className="content-infoblock-item-img" />
                    <h1 className="content-infoblock-item-title">The article</h1>
                    <p className="content-infoblock-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque culpa perspiciatis, atque asperiores ad ipsum quam aspernatur a doloremque libero temporibus adipisci sit sequi consequatur porro commodi perferendis unde.
                    </p>
                </div>
                <div className="content-infoblock-item">
                    <img src={landscape} alt="" className="content-infoblock-item-img" />
                    <h1 className="content-infoblock-item-title">The article</h1>
                    <p className="content-infoblock-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque culpa perspiciatis, atque asperiores ad ipsum quam aspernatur a doloremque libero temporibus adipisci sit sequi consequatur porro commodi perferendis unde.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InfoBlock;