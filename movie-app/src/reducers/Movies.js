import { handleActions } from 'redux-actions';
import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_FAIL } from '../actions/Movies';

const initialState = {
    loading: false,
    movies: [],
    fail: false
}

const movieReducer = handleActions({
    [GET_MOVIES_REQUEST] : (state, action) => ({
        ...state,
        loading: true
    }),
    [GET_MOVIES_SUCCESS] : (state, action) => ({
        ...state,
        loading: false,
        movies: action.payload,
        fail: false
    }),
    [GET_MOVIES_FAIL] : (state, action) => ({
        ...state,
        loading: false,
        fail: true,
        movies: []
    })
}, initialState)

export default movieReducer;