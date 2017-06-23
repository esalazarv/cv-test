/**
 * Created by eduardo on 22/06/17.
 */

/**
 * Dependencies
 */
import axios from 'axios';

import config from './config';

export const SEARCH_MOVIES = 'GET_MOVIES';

export function searchMovies(query = null) {

    return (dispatch) => {
        config.params = Object.assign({}, config.params, { value: query });
        const resource = axios.create(config);
        resource.get(config.url)
            .then((response) => {
                return dispatch({type: SEARCH_MOVIES, payload: response.data.response.prediction.movies.movie});
            })
            .catch((error) =>  dispatch({type: SEARCH_MOVIES, payload: []}));
    }
}
