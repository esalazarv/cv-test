/**
 * Created by eduardosalazar on 21/06/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from "./actions";

class MovieList extends Component {

    componentWillMount() {
        this.props.getMovies();
    }

    listMovies(movies = []) {
        return movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
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