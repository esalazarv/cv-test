/**
 * Created by eduardo on 22/06/17.
 */

export const GET_MOVIES = 'GET_MOVIES';


export function getMovies() {

    const movies = [
        { id: 1, title : 'Movie 1'},
        { id: 2, title : 'Movie 2'},
        { id: 3, title : 'Movie 3'},
        { id: 4, title : 'Movie 4'},
        { id: 5, title : 'Movie 5'},
    ];

    return { type: GET_MOVIES, payload: movies };
}
