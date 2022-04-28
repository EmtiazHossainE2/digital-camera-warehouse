import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='header-container ' variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="/">
                        <h4>Digital Camera Warehouse</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className='nav-style my-1'>
                            <Nav.Link as={CustomLink} to='/login' className='mt-2 fw-bold'>Login</Nav.Link>
                            <Nav.Link as={CustomLink} to='/signup' className='mt-2 fw-bold'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;