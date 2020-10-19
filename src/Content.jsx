import React from 'react';
import './styles/Content.scss'

import smartphone from "./img/slider_background_cut.png";


function Content() {
    return (
        <div className="content-slider">
            <div className="slider-container">
                <img className="slider-img" src={smartphone} alt="" />
            </div>
        </div>
    );
}

export default Content;