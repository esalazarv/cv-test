/**
 * Created by eduardosalazar on 21/06/17.
 */
/**
 * Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from "./actions";

/**
 * Components
 */
import Thumbnail from './thumbnail';

class MovieList extends Component {

    componentWillMount() {
        this.props.getMovies();
    }

    listMovies(movies = []) {
        if(!movies.length) {
            return <h1> No results </h1>;
        }
        return movies.map((movie) => <Thumbnail key={movie.id} movie={movie}/>);
    }

    render() {
        const {movies} = this.props;
        return (
            <div>
                {this.listMovies(movies)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.list
    }
}

export default connect(mapStateToProps, { getMovies })(MovieList);