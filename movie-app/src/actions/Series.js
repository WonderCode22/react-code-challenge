import { createAction } from 'redux-actions';

export const GET_SERIES_REQUEST = 'GET_SERIES_REQUEST';
export const GET_SERIES_SUCCESS = 'GET_SERIES_SUCCESS';
export const GET_SERIES_FAIL = 'GET_SERIES_FAIL';

export const get_series_request = createAction(GET_SERIES_REQUEST);
export const get_series_success = createAction(GET_SERIES_SUCCESS);
export const get_series_fail = createAction(GET_SERIES_FAIL);
