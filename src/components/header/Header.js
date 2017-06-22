/**
 * Dependencies
 */
import React, { Component } from 'react';

/**
 * Assets
 */

import './css/header.css';
import Logo from './img/logo.svg';


class Header extends Component {
    render() {
        let { links } = this.props;
        return (
            <div className="header">
                <div className="nav">
                    <div className="brand">
                        <img src={Logo} alt="claro video"/>
                    </div>
                    <ul className="links">
                        {links && links.map((item, key) => <li key={key}><a href="#">{item.display_name}</a></li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;