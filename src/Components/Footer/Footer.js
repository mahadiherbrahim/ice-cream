import React from 'react';
import Classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={['container', Classes.container].join(' ')}>
                <div>
                    Copyright &copy;2020.
                </div>
                <div className="textRight">
                    Built with <span class="red">&hearts;</span> by
                    <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="__blank">
                        Create React App
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;