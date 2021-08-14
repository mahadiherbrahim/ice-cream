import React from 'react';
import Classes from './TotalPrice.module.css'
const TotalPrice = ({ price }) => {
    return (
        <div className={Classes.total}>
            <div>Total Price</div>
            <div>{price.toFixed(2)}</div>
        </div>
    );
};

export default TotalPrice;