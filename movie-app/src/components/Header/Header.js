import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './header.css';

const Header = props => {
    return(
        <Fragment>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">DEMO Streaming</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link to="Login/"><Navbar.Text>Log in</Navbar.Text></Link>
                    <Form inline>
                        <Button variant="dark">Start your free trial</Button>
                    </Form>
                </Nav>
            </Navbar>
            <Navbar bg="dark" variant="dark" className='title'>
                <Navbar.Brand href={ props.url }>Popular { props.title }</Navbar.Brand>
            </Navbar>
        </Fragment>
    )
}

export default Header;