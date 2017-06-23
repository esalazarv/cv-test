/**
 * Created by eduardo on 23/06/17.
 */

/**
 * Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from "./actions";


/**
 * Assets
 */

import './css/movie-detail.css';

class Movie extends Component {

    componentWillMount() {
        const {movieId} = this.props;
        this.props.getMovieDetail(movieId);
    }

    render() {
        const movie = this.props.movie;
        return (
            <div className="movie-detail">
                <div className="movie-title">
                    <h1>{movie.title}</h1>
                </div>
                <div className="movie-detail-body">
                    <div className="movie-picture">
                        <img src={movie.image_large} alt={movie.image_large_alt}/>
                    </div>
                    <div className="movie-description">
                        <div>{movie.large_description}</div>
                        <div>Length: {movie.duration} hrs</div>
                        <div className="movie-social">
                            <a href="/#"><span className="fa fa-plus-circle fa-2x"></span></a>
                            <a href="/#"><span className="fa fa-share-alt fa-2x"></span></a>
                            <a href="/#"><span className="fa fa-facebook fa-2x"></span></a>
                        </div>
                        <div>
                            <a href="/#" className="movie-play-btn">Play now</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.currentMovie.detail
    }
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);