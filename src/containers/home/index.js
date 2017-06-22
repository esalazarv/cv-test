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

class Home extends Component {

    render() {
        return (
            <div>
                <MovieList/>
            </div>
        );
    }

}

export default Home;