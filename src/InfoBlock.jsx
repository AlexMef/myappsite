import React from 'react';
import './styles/InfoBlock.scss';

import refresh_btn from "./img/refresh-button.png";
import landscape from "./img/beautiful_landscape_web.jpg";
import { Component } from 'react';



class Item extends Component {
    render() {
        return (
            <div>
                <img src={landscape} alt="" className="content-infoblock-item-img" />
                <h1 className="content-infoblock-item-title">The article</h1>
                <p className="content-infoblock-item-text">
                    {this.props.text}</p>
            </div>
        );
    }
}

class Items extends Component {


    render() {
        return (
            <div>
                {this.props.items.map((item, index) => {
                    return <Item item={item} index={index} />
                })}

            </div>
        );
    }
}

class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props
        }
    }
    render() {
        return (
            <div className="content-infoblock-additem">
                <div className="content-infoblock-additem-text">Добавить элементы</div>
                <textarea className="content-infoblock-additem-textarea"></textarea>
                <button className="content-infoblock-additem-button">Добавить</button>
            </div>
        );
    }
}

class InfoBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    onItemCreate = newItem => {
        this.setState(oldItems => {
            return {
                items: [newItem].concat(oldItems.items)
            };
        });
    }

    render() {
        return (
            <div className="content-infoblock">


                <div><CreateItem /></div>
                <div className="content-infoblock-items" >
                    <Items items={this.state.items} onCreate={this.onItemCreate} />
                </div>
            </div>
        );

    }
}

export default InfoBlock;