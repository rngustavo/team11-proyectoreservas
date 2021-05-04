import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";
import emailjs from "emailjs-com";

// import crypto from "crypto";
// import nodemailer from "nodemailer";

export const Resetpassword = props => {
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [mensaje, setmensaje] = useState("");
	const { store, actions } = useContext(Context);
	const [islogin, setIsLogin] = useState(false);
	const params = useParams();

	// var crypto = require("crypto");
	// var nodemailer = require("nodemailer");

	//funcion de legeo
	const handleSubmit = e => {};

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
										<i className="fas fa-key" />
									</span>
								</div>
								<input
									type="email"
									className="form-control"
									placeholder="Contraseña"
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
									type="email"
									className="form-control"
									placeholder="Confirmar Contraseña"
									onChange={e => {
										setPassword2(e.target.value);
									}}
								/>
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
				</div>
			</div>
		</div>
	);
};

Resetpassword.propTypes = {
	match: PropTypes.object
};
