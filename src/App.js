import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/search-bar/SearchBar';
import MovieList from './components/movie-list/MovieList';
import Footer from './components/footer/Footer';

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
        return (
            <div className="App">
                <Header links={ this.state.links }/>
                <div className="container">
                    <SearchBar/>
                    <MovieList/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
