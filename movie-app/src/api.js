import * as Movies from './actions/Movies';
import * as Series from './actions/Series';
import axios from 'axios'

export const getProgramData = (programType) => {
    return (dispatch) => {
        if(programType=='series'){
            dispatch(Series.get_series_request());
            axios.get('http://localhost:4000/?type=series')
            .then(response=>{
                const result = response.data;
                dispatch(Series.get_series_success(result));
            })
            .catch(error=>{
                dispatch(Series.get_series_fail());
            })
        }
        else if(programType=='movies'){
            dispatch(Movies.get_movies_request());
            axios.get('http://localhost:4000/?type=movie')
            .then(response=>{
                const result = response.data;
                dispatch(Movies.get_movies_success(result));
            })
            .catch(error=>{
                dispatch(Movies.get_movies_fail());
            })
        }
    }
}
