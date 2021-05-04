import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";
import emailjs from "emailjs-com";
// import crypto from "crypto";
// import nodemailer from "nodemailer";

export const Forgotpassword = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mensaje, setmensaje] = useState("");
	const { store, actions } = useContext(Context);
	const [islogin, setIsLogin] = useState(false);

	// var crypto = require("crypto");
	// var nodemailer = require("nodemailer");

	const sendEmail = e => {
		e.preventDefault();
		emailjs
			.send(
				"service_5nvjbjn",
				"template_m7wvhrn",
				{
					to_name: "steven",
					from_name: "khalendar",
					message: "enviado desde js en mi app",
					to_email: email
				},
				"user_fxYYnkIXSTkQgA4JhUyfn"
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
	};

	//funcion de legeo
	const handleSubmit = e => {
		e.preventDefault();

		//valores que se le enviara al api
		const body = {
			email: email,
			password: password
		};
	};

	return (
		<div className="container-fluid pos">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Olvido de Contraseña</h3>
					</div>
					<div className="card-body">
						<form onSubmit={sendEmail} style={{ width: "500px" }}>
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
				</div>
			</div>
		</div>
	);
};
