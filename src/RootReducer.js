/**
 * Created by eduardo on 22/06/17.
 */

/**
 * Dependencies
 */
import { combineReducers } from 'redux';
import { getMovies } from './components/movie-list/reducers';

const reducers = combineReducers({
    movies: getMovies
});

export default reducers;