/**
 * Created by eduardo on 22/06/17.
 */

/**
 * Dependencies
 */
import { combineReducers } from 'redux';
import { getMovies } from './components/movie-list/reducers';
import { getMovieDetail } from "./components/movie/reducers";

const reducers = combineReducers({
    movies: getMovies,
    currentMovie: getMovieDetail
});

export default reducers;