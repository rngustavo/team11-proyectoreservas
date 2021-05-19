import React, { useState, useEffect, useContext } from "react";
//import PropTypes from "prop-types";
import "../../styles/index.scss";
//import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";
import emailjs from "emailjs-com";

export const Forgotpassword = () => {
	const [email, setEmail] = useState("");
	//const [password, setPassword] = useState("");
	//const [mensaje, setmensaje] = useState("");
	//const { store, actions } = useContext(Context);
	const [forgot, setForgot] = useState(false);
	const url_api = process.env.BACKEND_URL + "/api/forgot";
	const url_front = window.location.origin + "/resetpassword";

	const handleSubmit = e => {
		e.preventDefault();

		//valores que se le enviara al api
		const body = {
			email: email
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
				//si la promesa del fetch trae un valor diferente a undefiend realice lo siguiente
				if (data.msg != "Not found Email") {
					//alerta si fue exitosa

					//let link = "https://3000-emerald-bat-9onafycu.ws-us03.gitpod.io/resetpassword";

					emailjs
						.send(
							"service_5nvjbjn",
							"template_m7wvhrn",
							{
								from_name: "khalendar",
								message: url_front + "\n" + "Su nueva Clave Temporal es: " + data,
								to_email: email
							},
							"user_fxYYnkIXSTkQgA4JhUyfn"
						)
						.then(
							result => {
								swal({
									title: "Exito!",
									text: "Se le ha Enviado un Correo para Cambiar su Contraseña",
									icon: "success",
									button: "Aceptar"
								});
								setForgot(true);
							},
							error => {
								console.log(error.text);
							}
						);
				} else {
					swal({
						title: "Incorrecto!",
						text: "Email No Existe, Intente Nuevamente",
						icon: "error",
						button: "Aceptar"
					});
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
						<h3>Olvido de Contraseña</h3>
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

							<div className="form-group">
								<button type="submit" className="btn float-right login_btn botones">
									Aceptar
								</button>
							</div>
						</form>
						{/* me direcciona la pagina */}
						{forgot ? <Redirect to="/" /> : null}
					</div>
				</div>
			</div>
		</div>
	);
};
