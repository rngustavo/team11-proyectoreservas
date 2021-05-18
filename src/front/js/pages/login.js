import React, { useState, useEffect, useContext } from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//const [mensaje, setmensaje] = useState("");
	const { store, actions } = useContext(Context);
	const { islogin } = store;
	const { setLogin, setIsadmin, setEmailApi, getmisclasesreservadas } = actions;
	const url_api = process.env.BACKEND_URL + "/api/login";

	//funcion de legeo
	const handleSubmit = e => {
		e.preventDefault();

		//valores que se le enviara al api
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
			.then(res => res.json())
			.then(data => {
				let token = data.token;
				const tipoUserAdmin = data.tipoAdmin;

				if (token) {
					sessionStorage.setItem("my_token", token);

					setLogin(true);
					setEmailApi(email);
					if (tipoUserAdmin == "true") {
						setIsadmin(true);
					} else {
						setIsadmin(false);
					}
					//alerta si fue exitosa
					swal({
						title: "Correcto!",
						text: "Se ha Logeado Exitosamente",
						icon: "success",
						button: "Aceptar"
					});
					getmisclasesreservadas();
				} else {
					swal({
						title: "Incorrecto!",
						text: "Email o Contraseña Incorrecta, Intente Nuevamente",
						icon: "error",
						button: "Aceptar"
					});

					setLogin(false);
				}

				// let token = sessionStorage.getItem("my_token")
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container-fluid pos">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Iniciar Sesion</h3>
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
								<button type="submit" className="btn float-right login_btn">
									Aceptar
								</button>
							</div>
						</form>
						{/* me direcciona la pagina */}
						{islogin ? <Redirect to="/" /> : null}
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							No tienes cuenta?
							<Link to="/register">
								<a>Registarse</a>
							</Link>
						</div>
						<div className="d-flex justify-content-center">
							<a href="/forgotpassword">Olvido su contraseña?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
