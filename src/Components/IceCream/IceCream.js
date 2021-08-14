import React from 'react';
import Classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';
const IceCream = ({ scoops }) => {
    //const flavors = Object.keys(items)
    return (
        <div>
            <div className={Classes.icecream}>
                <p className={Classes.cone}></p>
                {/* <p>Please start adding scoops</p> */}
                {scoops.map((scoop) => (
                    <Scoop key={`${scoop}${Math.random()}`} scoop={scoop} />
                ))}
                <div className={Classes.cherry}></div>
            </div>
        </div>
    );
};

export default IceCream;