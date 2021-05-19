import React, { useState, useEffect, useContext } from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";

export const Resetpassword = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [islogin, setIsLogin] = useState(false);
	const url_api = process.env.BACKEND_URL + "/api/reset";

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password_temporal: password,
			nuevo_password: password2
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
				if (data.msg == "Password change successfully") {
					swal({
						title: "Correcto!",
						text: "Se ha cambiado su contraseña Exitosamente",
						icon: "success",
						button: "Aceptar"
					});
					setIsLogin(true);
				} else {
					swal({
						title: "Incorrecto!",
						text: "Email o Contraseña Temporal Incorrecta, Intente Nuevamente",
						icon: "error",
						button: "Aceptar"
					});
					setIsLogin(false);
				}
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container-fluid pos">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Resetear Contraseña</h3>
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
									type="text"
									className="form-control"
									placeholder="Email"
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
									type="text"
									className="form-control"
									placeholder="Contraseña Temporal"
									onChange={e => {
										setPassword(e.target.value);
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
									type="text"
									className="form-control"
									placeholder="Contraseña Nueva"
									onChange={e => {
										setPassword2(e.target.value);
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
						{islogin ? <Redirect to="/" /> : null}
					</div>
				</div>
			</div>
		</div>
	);
};
