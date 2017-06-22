/**
 * Dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
                        {links && links.map((item, key) => <li key={key}><Link to={item.url}>{item.display_name}</Link></li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;