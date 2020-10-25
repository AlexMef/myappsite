import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.scss';
// import slider_img from './img/smartphone.png';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Docs from './Docs';



function App() {
    return (
        <BrowserRouter>
            <div id="app-wrapper">
                <div><Header /></div>
                <div className="app-wrapper-content">
                    <Route exact path="/" component={Content} />
                    <Route path="/docs" component={Docs} />
                </div>

                <div><Footer /></div>
            </div>
        </BrowserRouter>

    );
}

export default App;