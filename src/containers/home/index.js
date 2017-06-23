/**
 * Created by eduardo on 22/06/17.
 */
/**
 * Dependencies
 */
import React, { Component } from 'react';

/**
 * Components
 */
import MovieList from "../../components/movie-list";
import SearchBar from "../../components/search-bar/index";

class HomeContainer extends Component {

    render() {
        return (
            <div className="container">
                <SearchBar/>
                <MovieList/>
            </div>
        );
    }

}

export default HomeContainer;