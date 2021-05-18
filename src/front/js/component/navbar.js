import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import LogoKF from "../../img/LogoKF2.png";

export const Navbar1 = () => {
	const { store, actions } = useContext(Context);
	const { islogin, isadmin } = store;
	const { setLogin, setEmailApi } = actions;

	return (
		<div className="container navpad ">
			<Navbar bg="" expand="lg" className="navcus">
				<Navbar.Brand href="/">
					<Link to="/">
						<img src={LogoKF} width="100" height="100" />
					</Link>
				</Navbar.Brand>
				<Navbar.Brand className="colortexto">
					<p className="colortexto"> Kalendar-FIT</p>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto colortexto">
						{/* <Nav.Link href="/crearclase">
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
						</Nav.Link> */}
						{islogin ? (
							<>
								{isadmin ? (
									<>
										<Link to="/crearclase">
											<Button variant="outline-light" className="botones">
												Crear clase
											</Button>
										</Link>
										<Link to="/clasescreadas">
											<Button variant="outline-light" className="botones">
												Clases creadas
											</Button>
										</Link>
									</>
								) : (
									<>
										<Link to="/misclases">
											<Button variant="outline-light" className="botones">
												Mis clases
											</Button>
										</Link>
									</>
								)}
							</>
						) : null}
						<>
							<Link to="/clasedisponibles">
								<Button variant="outline-light" className="botones">
									Clases disponibles
								</Button>
							</Link>
							<Link to="/tienda">
								<Button variant="outline-light" className="botones">
									Tienda virtual
								</Button>
							</Link>
							<Link to="/contact">
								<Button variant="outline-light" className="botones">
									Nosotros
								</Button>
							</Link>
						</>
					</Nav>
					{islogin ? (
						<>
							<Link to="/">
								<Button
									variant="primary buttonspace"
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
