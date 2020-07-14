import React from 'react';
import './styles/App.scss';
// import slider_img from './img/smartphone.png';

import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import PostsMenu from './PostsMenu';
import Posts from './Posts';

function App() {
    return (
        <div id="grid">
            <div id="pageHeader"><Header /></div>
            <div id="pageSlider"><Slider /></div>
            <div id="postsMenu"><PostsMenu /></div>
            <div id="posts"><Posts /></div>
            <div id="pageFooter"><Footer /></div>
        </div>

    );
}

export default App;