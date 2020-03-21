import { combineReducers } from 'redux';
import movieReducer  from './Movies';
import seriesReducer  from './Series';

export const rootReducer = combineReducers({
    movieReducer,
    seriesReducer
})
