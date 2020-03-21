import React, { Fragment } from 'react';
import Header from './Header/Header';
import Card from './Card/Card';
import { Link } from 'react-router-dom';
import Content from './Content/Content';

const HomePage = () => {
    return(
        <Fragment>
            <Header title='Titles'></Header>
            <Content>
                <Link to='/series'><Card type='Series' title='Popular Series'></Card></Link>
                <Link to='/movies'><Card type='Movies' title='Popular Movies'></Card></Link>
            </Content>
        </Fragment>
    )
}

export default HomePage;