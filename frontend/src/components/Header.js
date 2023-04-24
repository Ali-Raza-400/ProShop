import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userAction";
const Header = () => {
  const dispatch =useDispatch()
  const {userInfo} =useSelector((state)=>state.userLogin)
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
   
          {" "}
          <Navbar.Brand as={Link} to='/'>ProShop Ecommerce</Navbar.Brand>
   
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
           
            <Nav.Link as={Link} to="/cart">
              <i className="fas fa-shopping-cart"></i>Cart
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/login">
              <i className="fas fa-user"></i>
              SignIn
            </Nav.Link> */}
            {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <Link as={Link} to='/profile'>
                   Profile
                  </Link>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
              
                  <Nav.Link as={Link} to='/login'>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
          
              )}
            {/* <NavDropdown title="SignIn" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><i className="fas fa-user"></i>Name</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Email</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
