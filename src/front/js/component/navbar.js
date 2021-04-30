import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Dropdown, DropdownButton, FormControl } from "react-bootstrap";

export const Navbar1 = () => {
	return (
		<div className="container navpad">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">
					<i className="fas fa-dumbbell fa-2x d-inline-block align-top" width="30" height="30" />
				</Navbar.Brand>
				<Navbar.Brand href="#home">Kalendar-FIT</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Inicio</Nav.Link>
						<Nav.Link href="#link">Clases</Nav.Link>
						<Nav.Link href="/contact">Contact</Nav.Link>
					</Nav>
					<DropdownButton inline id="dropdown-basic-button" title="Dropdown button">
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</DropdownButton>
					<Link to="/login">
						<Button variant="primary">Login</Button>{" "}
					</Link>
				</Navbar.Collapse>
			</Navbar>
			<script src="https://kit.fontawesome.com/3b05315429.js" crossOrigin="anonymous" />
		</div>
	);
};
