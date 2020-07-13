import React from 'react';
import './styles/App.scss';
// import slider_img from './img/smartphone.png';

import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import ContentMenu from './ContentMenu';
import ContentPosts from './ContentPosts';

function App() {
    return (
        <div id="grid">
            <div id="pageHeader"><Header /></div>
            <div id="pageSlider"><Slider /></div>
            <div id="contentMenu"><ContentMenu /></div>
            <div id="contentPosts"><ContentPosts /></div>
            <div id="pageFooter"><Footer /></div>
        </div>

    );
}

export default App;