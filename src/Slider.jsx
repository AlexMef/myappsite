import React from 'react';
import './styles/Slider.scss';

import smartphone from "./img/slider_background_cut.png";

function Slider() {
    return (
        <div className="slider_container">
            <img className="slider_img" src={smartphone} alt="" />
        </div>
    );
}

export default Slider;