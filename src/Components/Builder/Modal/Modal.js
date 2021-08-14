import React from 'react';
import Classes from './Modal.module.css'
const Modal = ({ children }) => {
    return (
        <div>
            <div className={Classes.backdrop} onclick="removeModal()"></div>
            <div className={Classes.modalBody}>
                {children}
            </div>
        </div>
    );
};

export default Modal;