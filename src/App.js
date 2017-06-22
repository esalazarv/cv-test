import React, { Component } from 'react';
import './App.css';
import Header from './components/header/index';
import Footer from './components/footer';
import Content from './components/content';

class App extends Component {

    constructor() {
        super();
        this.state = {
            links: [
                {
                    display_name: 'Home',
                    url: '/',
                },
                {
                    display_name: 'Categories',
                    url: '/categories',
                },
                {
                    display_name: 'Kids',
                    url: '/kids'
                }
            ]
        }
    }

    render() {
        const { children } = this.props;

        return (
            <div className="App">
                <Header links={ this.state.links }/>
                <Content body={children}/>
                <Footer/>
            </div>
        );
    }

}

export default App;
