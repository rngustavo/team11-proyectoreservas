import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import LogoKF from "../../img/LogoKFBN.png";

export const Navbar1 = () => {
	const { store, actions } = useContext(Context);
	const { islogin, isadmin } = store;
	const { setLogin, setEmailApi } = actions;

	return (
		<div className="container navpad ">
			<Navbar bg="" expand="lg" className="navcus">
				<Navbar.Brand href="/">
					<Link to="/">
						<img src={LogoKF} width="50" height="50" />
					</Link>
				</Navbar.Brand>
				<Navbar.Brand className="colortexto">
					<p className="colortexto brand"> Kalendar-FIT</p>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto colortexto">
						{islogin ? (
							<>
								{isadmin ? (
									<>
										<Link to="/crearclase">
											<Button variant="outline-light" className="botonesnav">
												Crear clase
											</Button>
										</Link>
										<Link to="/clasescreadas">
											<Button variant="outline-light" className="botonesnav">
												Clases creadas
											</Button>
										</Link>
									</>
								) : (
									<>
										<Link to="/misclases">
											<Button variant="outline-light" className="botonesnav">
												Mis clases
											</Button>
										</Link>
									</>
								)}
							</>
						) : null}
						<>
							<Link to="/clasedisponibles">
								<Button variant="outline-light" className="botonesnav">
									Clases disponibles
								</Button>
							</Link>
							<Link to="/tienda">
								<Button variant="outline-light" className="botonesnav">
									Tienda virtual
								</Button>
							</Link>
							<Link to="/contact">
								<Button variant="outline-light" className="botonesnav">
									Nosotros
								</Button>
							</Link>
						</>
					</Nav>
					{islogin ? (
						<>
							<Link to="/">
								<Button
									className="botones"
									variant="outline-light"
									onClick={() => {
										setLogin(false);
										setEmailApi("");
										swal({
											title: "Sesion Cerrada!",
											text: "Ha cerrado sesion correctamente",
											icon: "info",
											button: "Aceptar"
										});
									}}>
									Logout
								</Button>
							</Link>
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
