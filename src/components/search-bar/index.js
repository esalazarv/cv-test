/**
 * Created by eduardosalazar on 21/06/17.
 */

/**
 * Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from  './actions';
import { getMovies } from  '../movie-list/actions';


import './css/search-bar.css';

class SearchBar extends  Component {

    constructor(){
        super();
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e) {
        if(e.target.value.length > 0) {
            this.props.searchMovies(e.target.value);
        } else {
            this.props.getMovies();
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input type="text" placeholder="search" onChange={this.handleTextChange}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.list
    }
}

export default connect(mapStateToProps , { searchMovies, getMovies })(SearchBar);