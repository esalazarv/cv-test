/**
 * Created by eduardo on 23/06/17.
 */

/**
 * Dependencies
 */
import React, { Component } from 'react';

import Movie from '../../components/movie';

class MovieContainer extends Component {

    render(){
        const {id} = this.props.match.params;
        return (
            <div className="container">
                <Movie movieId={id}/>
            </div>
        );
    }
}

export default MovieContainer;