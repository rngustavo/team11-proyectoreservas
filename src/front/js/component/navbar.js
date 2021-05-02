import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Dropdown, DropdownButton, FormControl } from "react-bootstrap";

export const Navbar1 = () => {
	return (
		<div className="container navpad">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">
					<i className="fas fa-dumbbell fa-2x d-inline-block align-top" width="30" height="30" />
				</Navbar.Brand>
				<Navbar.Brand href="/">Kalendar-FIT</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Inicio</Nav.Link>
						<Nav.Link href="#link">Clases</Nav.Link>
						<Nav.Link href="/contact">Contact</Nav.Link>
					</Nav>
					<Link to="#link">
						<Button variant="primary buttonspace">Registro</Button>{" "}
					</Link>
					<Link to="/login">
						<Button variant="primary buttonspace">Login</Button>{" "}
					</Link>
				</Navbar.Collapse>
			</Navbar>
			<script src="https://kit.fontawesome.com/3b05315429.js" crossOrigin="anonymous" />
		</div>
	);
};
