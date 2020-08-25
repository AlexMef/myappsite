import React from 'react';
import './styles/App.scss';
// import slider_img from './img/smartphone.png';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';



function App() {
    return (
        <div id="grid">
            <div id="pageHeader"><Header /></div>
            <div id="pageContent"><Content /></div>
            <div id="pageFooter"><Footer /></div>
        </div>

    );
}

export default App;