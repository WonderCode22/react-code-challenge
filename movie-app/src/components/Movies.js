import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux'
import { getProgramData } from '../api';
import Content from './Content/Content';
import Header from './Header/Header';
import { withRouter } from 'react-router-dom'


const Movies = (props) => {
    const [initiate] = useState(0)
    useEffect(()=>{
        console.log("start")
        props.getMovieData();
    }, []);
    
    return(
        <Fragment>
            <Header title='Movies'/>
            <Content info={props}></Content>
        </Fragment>
    )
}

export default connect(
    (state) => ({
        loading: state.movieReducer.loading,
        data: state.movieReducer.movies,
        fail: state.movieReducer.fail
    }),
    (dispatch) => ({
        getMovieData: () => dispatch(getProgramData('movies'))
    })
)(withRouter(Movies));
