import React from 'react';
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import '../App.css';
import ListView from "./ListView";

class Store extends React.Component {

    constructor(props) {
        super(props);
        this.state = {select: true};
        this.onSwitchIcon = this.onSwitchIcon.bind(this);
    }

    products = [{
        name: "Nike Metcon 2",
        price: "130",
        colored: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        colored: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        colored: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        colored: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        colored: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        colored: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];
    icons = ['view_list', 'view_module'];

    onSwitchIcon(evt) {
        evt.preventDefault();
        this.setState((state) => {
            return {select: !(state.select)};
        })
    }

    render() {
        if (this.state.select) {
            return (
                <div className='container'>
                    <div className='IconSwitch'>
                        <IconSwitch icon={this.icons[Number(this.state.select)]} onSwitch={this.onSwitchIcon}/>
                    </div>
                    <div className='view_list'>
                        <ListView cards={this.products}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container'>
                    <div className='IconSwitch'>
                        <IconSwitch icon={this.icons[Number(this.state.select)]} onSwitch={this.onSwitchIcon}/>
                    </div>
                    <div className='view_module'>
                        <CardsView cards={this.products}/>
                    </div>
                </div>
            )
        }
    }
}

export default Store;