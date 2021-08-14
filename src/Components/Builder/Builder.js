import React from 'react';
import Classes from './Builder.module.css'
import Items from './Items/Items';
import Modal from './Modal/Modal';
import TotalPrice from './TotalPrice/TotalPrice'
const Builder = ({ add, remove, scoops, price, items }) => {
    return (
        <div>
            <div className="builder">
                <h3>Build your own Ice Cream Sundae</h3>

                <Items items={items} add={add} remove={remove} scoops={scoops} />

                <TotalPrice price={price}></TotalPrice>

                <button type="button" className={[Classes.order, Classes.rounded].join(' ')}>
                    Add to Cart
                </button>
            </div>
            <Modal>Hello Modal Body</Modal>
        </div>
    );
};

export default Builder;