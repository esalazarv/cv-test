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

    constructor(){
        super();
        this.state = {
            isActive: false,
            classStyle: ''
        }
        this.handleToggleMenuBtn = this.handleToggleMenuBtn.bind(this);
    }

    handleToggleMenuBtn(e) {
        console.log(this.state);
        if (this.state.isActive) {
            this.setState({classStyle: '', isActive:false});
        } else {
            this.setState({classStyle: 'active', isActive: true});
        }
    }

    render() {
        let { links } = this.props;
        let { classStyle } = this.state;
        return (
            <div className="header">
                <div className="container">
                    <div className="nav">
                        <div className="brand">
                            <img src={Logo} alt="claro video"/>
                        </div>
                        <button className="toggle-btn" onClick={this.handleToggleMenuBtn}><span className="fa fa-navicon"></span></button>
                        <ul className={ "links " + classStyle} >
                            {links && links.map((item, key) => <li key={key}><Link to={item.url} onClick={this.handleToggleMenuBtn}>{item.display_name}</Link></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;