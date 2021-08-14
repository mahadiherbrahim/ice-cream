import { classes } from 'istanbul-lib-coverage';
import React, { Component } from 'react';
import Builder from '../../Components/Builder/Builder';
import IceCream from './../../Components/IceCream/IceCream'


class IceCreamBuilder extends Component {
    state = {
        items: {},
        scoops: [],
        totalPrice: 0

    }

    componentDidMount() {
        fetch('https://ice-cream-76443-default-rtdb.firebaseio.com/items.json')
            .then((response) => response.json())
            .then((resData) => {
                this.setState({
                    items: resData
                })
            });
    }

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop]
            };
        });
    };

    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];

        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop)
        workingScoops.splice(scoopIndex, 1);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop]
            };
        });
    };




    render() {
        const { items, totalPrice, scoops } = this.state;
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream scoops={scoops}></IceCream>
                <Builder
                    items={items}
                    price={totalPrice}
                    add={this.addScoop}
                    remove={this.removeScoop}
                    scoops={scoops}
                >
                </Builder>
            </div>
        );
    }
}

export default IceCreamBuilder;