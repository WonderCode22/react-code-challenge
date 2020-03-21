import { handleActions } from 'redux-actions';
import { GET_SERIES_REQUEST, GET_SERIES_SUCCESS, GET_SERIES_FAIL } from '../actions/Series';

const initialState = {
    loading: false,
    series: [],
    fail: false
}

const seriesReducer = handleActions({
    [GET_SERIES_REQUEST] : (state, action) => ({
        ...state,
        loading: true
    }),
    [GET_SERIES_SUCCESS] : (state, action) => ({
        ...state,
        loading: false,
        series: action.payload,
        fail: false
    }),
    [GET_SERIES_FAIL] : (state, action) => ({
        ...state,
        loading: false,
        fail: true,
        series: []
    }),
}, initialState)

export default seriesReducer;