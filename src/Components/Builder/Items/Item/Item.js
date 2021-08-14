import React from 'react';
import Classes from './Item.module.css'
import { countBy } from 'lodash';
const Item = ({ name, add, remove, scoops = {} }) => {
    const scoopByCount = countBy(scoops)
    return (
        <li className={Classes.item}>
            <span>{name}</span>
            {scoopByCount[name] >= 0 ? (
                <span className={Classes.quantity}>{scoopByCount[name]}</span>
            ) : null}
            <div className="right">
                <button type="button" onClick={add.bind(this, name)} className={[Classes.plus, 'rounded'].join(' ')}>+</button>
                <button type="button" onClick={remove.bind(this, name)} className={[Classes.minus, 'rounded'].join(' ')}>-</button>
            </div>
        </li>
    );
};

export default Item;