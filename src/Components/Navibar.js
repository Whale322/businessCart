import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function NaviBar(){
    return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Business card website</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr=auto">
            <Nav.Link><Link to="">Home</Link></Nav.Link>
            <Nav.Link><Link to="products">Products</Link></Nav.Link>
            <Nav.Link><Link to="basket">Basket</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
)}
