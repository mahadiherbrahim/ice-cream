import React from 'react';
import Classes from './Scoop.module.css'
const Scoop = ({ scoop }) => {
    return (
        <div className={[Classes.scoop, Classes[scoop]].join(' ')} />
    );
};

export default Scoop;