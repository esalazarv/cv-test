/**
 * Created by eduardo on 22/06/17.
 */

/**
 * Actions
 */
import { GET_MOVIE_DETAIL } from './actions';

const initialState = {
    detail: {
        id: '',
        title: '',
        description: '',
        large_description: '',
        image_large: '',
        image_large_alt: '',
        image_medium: '',
        image_medium_alt: '',
        image_small: '',
        image_small_alt: '',
        image_still: '',
        image_background: '',
        duration: '',
        date: '',
        media_type: '',
        title_uri: '',
        extendedcommon: {
            roles: {
                role: []
            }
        }
    }
}

/**
 * Reducers
 */

/**
 * @param state
 * @param action
 * @returns {*}
 */
export function getMovieDetail(state = initialState, action) {

    switch (action.type) {
        case GET_MOVIE_DETAIL:
            return Object.assign({}, state, { detail: action.payload });
        default: return state;
    }

}