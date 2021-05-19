import React, { useState, useEffect, useContext } from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);
	const url_api = process.env.BACKEND_URL + "/api/register";

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		fetch(url_api, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => response.json())
			.then(data => {
				if (data.msg == "User created successfully") {
					swal({
						title: "Correcto!",
						text: "Se ha Registardo Exitosamente",
						icon: "success",
						button: "Aceptar"
					});
					setAuth(true);
				} else {
					swal({
						title: "Incorrecto!",
						text: "Usuario ya tiene cuenta, Intente Nuevamente",
						icon: "error",
						button: "Aceptar"
					});
					setAuth(false);
				}
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container-fluid pos">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Registrarse</h3>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit} style={{ width: "500px" }}>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-envelope" />
									</span>
								</div>
								<input
									type="email"
									className="form-control"
									placeholder="Email@.com"
									onChange={e => {
										setEmail(e.target.value);
									}}
								/>
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-key" />
									</span>
								</div>
								<input
									type="password"
									className="form-control"
									placeholder="Contraseña"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="row align-items-center remember">
								<input type="checkbox" />
								Recordarme
							</div>
							<div className="form-group">
								<button type="submit" className="btn float-right login_btn botones">
									Aceptar
								</button>
							</div>
						</form>
						{auth ? <Redirect to="/login" /> : null}
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							Ya tienes cuenta?
							<Link to="/login">
								<a>Iniciar Sesion</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
