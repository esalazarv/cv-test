/**
 * Created by eduardo on 22/06/17.
 */

/**
 * Dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/movie-item.css';

class Thumbnail extends Component {

    render() {
        const { movie } = this.props;
        const route = {
            pathname: '/movie/' + movie.id
        };
        return (
            <div className="movie-item">
                <Link to={route}>
                    <img src={movie.image_small} alt=""/>
                    <div className="play">
                        <span className="fa fa-play-circle"></span>
                    </div>
                </Link>
            </div>
        );
    }

}

export default Thumbnail;