import React from 'react';
import './styles/Slider.scss';

import smartphone from "./img/slider_background_cut.png";


function Slider() {
    return (
        <div className="content-slider">
            <div className="slider-container">
                <div className="slider-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <img className="slider-img" src={smartphone} alt="" />
            </div>
        </div>
    );
}

export default Slider;