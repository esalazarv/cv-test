/**
 * Created by eduardo on 22/06/17.
 */

/**
 * Dependencies
 */
import axios from 'axios';

import config from './config';

export const GET_MOVIES = 'GET_MOVIES';

export function getMovies(parameters = {}) {

    return (dispatch) => {
        config.params = Object.assign({}, config.params, parameters);
        const resource = axios.create(config);
        resource.get(config.url)
            .then((response) => dispatch({ type: GET_MOVIES, payload: response.data.response.groups }))
            .catch((error) => console.warn(error));
    }
}
