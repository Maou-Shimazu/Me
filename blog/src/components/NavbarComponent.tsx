import * as React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export default class NavbarComponent extends React.Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Maou Shimazu</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        )
    }
}