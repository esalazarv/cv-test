/**
 * Created by eduardo on 22/06/17.
 */

/**
 * Dependencies
 */
import axios from 'axios';

import config from './config';

export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';


export function getMovieDetail(id = null) {

    return (dispatch) => {
        config.params = Object.assign({}, config.params, {group_id: id});
        const resource = axios.create(config);
        resource.get(config.url)
            .then((response) => dispatch({ type: GET_MOVIE_DETAIL, payload: response.data.response.group.common }))
            .catch((error) => console.warn(error));
    }
}
