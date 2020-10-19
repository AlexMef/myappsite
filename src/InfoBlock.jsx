import React from 'react';
import './styles/InfoBlock.scss';

import refresh_btn from "./img/refresh-button.png";

function InfoBlock() {
    return (
        <div className="content-infoblock">
            <div className="content-infoblock-text">Read more</div>
            <a className="content-infoblock-arrow" href="#">
                <img src={refresh_btn} alt="" />
            </a>

            <div className="content-infoblock-items">
                <span id="row-1">
                    <div className="item-block"></div>
                    <div className="item-block"></div>
                    <div className="item-block"></div>
                </span>
                <span id="row-2">
                    <div className="item-block"></div>
                    <div className="item-block"></div>
                    <div className="item-block"></div>
                </span>
                <span id="row-3">
                    <div className="item-block"></div>
                    <div className="item-block"></div>
                    <div className="item-block"></div>
                </span>
                

            </div>
        </div>
    );
}

export default InfoBlock;