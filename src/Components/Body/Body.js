import React from 'react';
import IceCreamBuilder from '../../Containers/IceCreamBuilder/IceCreamBuilder';
import Classes from './Body.module.css'
const Body = () => {
    return (
        <div className={Classes.mainBody}>
            <IceCreamBuilder></IceCreamBuilder>
        </div>
    );
};

export default Body;