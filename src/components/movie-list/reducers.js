/**
 * Created by eduardo on 22/06/17.
 */

/**
 * Actions
 */
import { GET_MOVIES } from './actions';
import { SEARCH_MOVIES } from '../search-bar/actions';

const initialState = {
    list: []
}

/**
 * Reducers
 */

/**
 * @param state
 * @param action
 * @returns {*}
 */
export function getMovies(state = initialState, action) {

    switch (action.type) {
        case GET_MOVIES:
            return Object.assign({}, state, { list: action.payload });
        case SEARCH_MOVIES:
            return Object.assign({}, state, { list: action.payload });
        default: return state;
    }

}