import React from 'react';
import { Container, Button, Form, FormControl, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <Navbar bg="light" expand="lg">
         <Container fluid>
            <Navbar.Brand href="#">Hero Programmers</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-4 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            <Stack direction="horizontal" gap={5}>
            <NavLink
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "salmon"
                }}
            >
            Home
            </NavLink>
            <NavLink
                to="/services"
                activeStyle={{
                    fontWeight: "bold",
                    color: "salmon"
                }}
            >
            Services
            </NavLink>
            <NavLink
                to="/extra"
                activeStyle={{
                    fontWeight: "bold",
                    color: "salmon"
                }}
            >
            Founder 
            </NavLink>
            <NavLink
                to="/about"
                activeStyle={{
                    fontWeight: "bold",
                    color: "salmon"
                }}
            >
            About Us
            </NavLink>
        </Stack>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
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