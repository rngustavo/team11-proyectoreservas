import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";

export const Navbar1 = () => {
	const { store, actions } = useContext(Context);
	const { islogin } = store;
	const { setLogin } = actions;

	return (
		<div className="container navpad ">
			<Navbar bg="" expand="lg" className="navcus">
				<Navbar.Brand href="/">
					<i className="fas fa-dumbbell fa-2x d-inline-block align-top" width="30" height="30" />
				</Navbar.Brand>
				<Navbar.Brand className="colortexto">
					<p className="colortexto"> Kalendar-FIT</p>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto colortexto">
						<Nav.Link href="/crearclase">
							<p className=" botonesnav">Crear clase </p>
						</Nav.Link>
						<Nav.Link href="/clasedisponibles">
							<p className=" botonesnav">Clases disponibles</p>
						</Nav.Link>
						<Nav.Link href="/clasescreadas">
							<p className=" botonesnav">Clases creadas</p>
						</Nav.Link>
						<Nav.Link href="/misclases">
							<p className=" botonesnav"> Mis clases</p>
						</Nav.Link>
						<Nav.Link href="/tienda">
							<p className=" botonesnav">Tienda virtual</p>
						</Nav.Link>
						<Nav.Link href="/contact">
							<p className=" botonesnav">Nosotros</p>
						</Nav.Link>
					</Nav>
					{islogin ? (
						<>
							<Button
								variant="primary buttonspace"
								onClick={() => {
									setLogin(false);
									swal({
										title: "Sesion Cerrada!",
										text: "Ha cerrado sesion correctamente",
										icon: "info",
										button: "Aceptar"
									});
								}}>
								Logout
							</Button>
						</>
					) : (
						<>
							<Link to="/register">
								<Button variant="outline-light" className="botones">
									Registrarme
								</Button>
							</Link>
							<Link to="/login">
								<Button variant="outline-light" className="botones">
									Login
								</Button>
							</Link>
						</>
					)}
				</Navbar.Collapse>
			</Navbar>
			<script src="https://kit.fontawesome.com/3b05315429.js" crossOrigin="anonymous" />
		</div>
	);
};
