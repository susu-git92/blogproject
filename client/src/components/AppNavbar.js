import React, { Fragment, useEffect, useState, useCallback } from 'react';
import {Nav, Navbar, Container, Collapse, NavbarToggler } from 'reactstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import LoginModal from '../components/auth/LoginModal';
import {useDispatch, useSelector} from 'react-redux';
import { LOGOUT_REQUEST } from '../redux/types';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {isAuthenticated, user, userRole} = useSelector((state) => state.auth)
  console.log(userRole, "UserRole")

  const dispatch= useDispatch()

  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST
    })
  }, [dispatch])

  useEffect(() => {
    setIsOpen(false)
  }, [user])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  

  return (
    <Fragment>
        <Navbar color="dark" dark expand="lg" className="sticky-top">
            <Container>
                <Link to="/" className="text-white text-decoration-none">
                    랄라수 블로그
                </Link>
                <NavbarToggler onClick={handleToggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto d-flex justify-content-around" navbar>
                      {isAuthenticated ? 
                        ( <h1 className="text-white">authLink</h1> ) 
                        : 
                        ( <LoginModal/> )
                      }
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </Fragment>
  )
}
export default AppNavbar