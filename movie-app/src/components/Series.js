import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux'
import { getProgramData } from '../api';
import Content from './Content/Content';
import Header from './Header/Header';


const Series = (props) => {
    useEffect(()=>{
        props.getSeriesData();
    }, []);
    
    return(
        <Fragment>
            <Header title='Series'/>
            <Content info={props}></Content>
        </Fragment>
    )
}

export default connect(
    (state) => ({
        loading: state.seriesReducer.loading,
        data: state.seriesReducer.series,
        fail: state.seriesReducer.fail
    }),
    (dispatch) => ({
        getSeriesData: () => dispatch(getProgramData('series'))
    })
)(Series);
