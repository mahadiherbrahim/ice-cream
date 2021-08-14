import React from 'react';
import Classes from './Header.module.css'
import logo from './../../assets/images/logo.svg'
import reactLogo from './../../assets/images/react.svg'
const Header = () => {
    return (
        <header>
            <div className="container react">
                <div>
                    <img className={Classes.logo} src={logo} alt="Logo" />
                </div>
                <div className="textRight">
                    <img src={reactLogo} alt="React" className={Classes.reactLogo} />
                    <strong>React</strong>
                </div>
            </div>
        </header>
    );
};

export default Header;