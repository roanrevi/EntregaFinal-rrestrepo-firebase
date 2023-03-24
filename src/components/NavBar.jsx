import React from 'react'
import CartWidget from './CartWidget'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import { Link } from 'react-router-dom';
function ColorSchemesExample() {
    return (
        <>
        
        <Navbar bg="dark" variant="dark">
                <Container>
                <Link to ={"/"}><Logo/></Link>
                        <Nav className="me-auto">
                            <Nav.Link href="/catalogo">Usuarios</Nav.Link>
                            <Navbar.Collapse className="justify-content-end me-auto">
                                <NavDropdown title="Cargos" id="basic-nav-dropdown">
                                <Link to={`/cargo/${"Servicios Generales"}`}>
                                <NavDropdown.Item href="#action/3.3">Servicios Generales</NavDropdown.Item>
                                </Link> 
                                <Link to={`/cargo/${"Asistente Administrativo"}`}>
                                <NavDropdown.Item href="#action/3.2">Asistente Administrativo</NavDropdown.Item>
                                </Link> 
                                <Link to={`/cargo/${"Auxiliar de Enfermeria"}`}>
                                <NavDropdown.Item href="#action/3.5">Auxiliar de Enfermeria</NavDropdown.Item>
                                </Link> 
                                <Link to={`/cargo/${"Medico General"}`}>
                                <NavDropdown.Item href="#action/3.8">Medico General</NavDropdown.Item>
                                </Link> 
                                </NavDropdown>
                            </Navbar.Collapse>
                        </Nav>
                        <Link to ={"/cart"}><CartWidget /></Link>
                        
                        
                        
                </Container>
            
        </Navbar>
        </>
    );
}

export default ColorSchemesExample;