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
                <div className="row">
                    <div className="col-md-2">
                        <Link to='/series'><Card type='Series' title='Popular Series'></Card></Link>
                    </div>
                    <div className="col-md-2">
                        <Link to='/movies'><Card type='Movies' title='Popular Movies'></Card></Link>
                    </div>
                </div>
            </Content>
        </Fragment>
    )
}

export default HomePage;