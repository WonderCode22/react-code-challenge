import { createAction } from 'redux-actions';

export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAIL = 'GET_MOVIES_FAIL';

export const get_movies_request = createAction(GET_MOVIES_REQUEST);
export const get_movies_success = createAction(GET_MOVIES_SUCCESS);
export const get_movies_fail = createAction(GET_MOVIES_FAIL);