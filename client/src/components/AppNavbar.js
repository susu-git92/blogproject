import React, { Fragment } from 'react';
import {Nav, Navbar, Container, Collapse } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  

const AppNavbar = () => {
  return (
    <Fragment>
        <Navbar color="dark" dark expand="lg" className="sticky-top">
            <Container>
                <Link to="/" className="text-white text-decoration-none">
                    Side Project's Blog(랄라수 블로그)
                </Link>
                <Collapse isOpen={true} navbar>
                    <Nav className="ml-auto d-flex justify-content-around" navbar>
                      {false ? 
                        (<h1 className="text-white">authLink</h1>) 
                        : 
                        (<h1 className="text-white">guestLink</h1>)
                      }
                    </Nav>
                </Collapse>
                <Navbar.Toggle />
            </Container>
        </Navbar>
    </Fragment>
  )
}
export default AppNavbar