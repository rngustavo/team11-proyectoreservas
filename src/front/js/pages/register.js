import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import { propTypes } from "react-bootstrap/esm/Image";
import { Redirect } from "react-router-dom";

const handleSubmit = e => {
	e.preventDefault();

	const body = {
		email: email,
		password: password
	};
	//setLogin(true);
	// fetch de LOGIN
	fetch("https://3000-black-koala-jisgb2cv.ws-us03.gitpod.io/login", {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			// añadir token a session
			//usuario valido
			let token = data.token;
			console.log(token);
			if (token) {
				sessionStorage.setItem("my_token", data.token);
				setLogin(true);
				console.log(islogin);
				setmensaje("");
			} else setmensaje(data.msg);

			// let token = sessionStorage.getItem("my_token")
		})
		.catch(err => console.log(err));
};

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mensaje, setmensaje] = useState("");

	const { islogin } = store;
	const { setLogin } = actions;

	return (
		<div className="container-fluid pos">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Register</h3>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit} style={{ width: "500px" }}>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-user" />
									</span>
								</div>
								<input
									type="text"
									className="form-control"
									placeholder="Name"
									onChange={e => {
										setName(e.target.value);
									}}
								/>
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-envelope" />
									</span>
								</div>
								<input
									type="email"
									className="form-control"
									placeholder="@"
									onChange={e => {
										setEmail(e.target.value);
										setmensaje("");
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
									placeholder="password"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="row align-items-center remember">
								<input type="checkbox" />
								Remember Me
							</div>
							<div className="form-group">
								<button type="submit" className="btn float-right login_btn">
									Register
								</button>
							</div>
						</form>
						{islogin ? <Redirect to="/login" /> : null}
					</div>
				</div>
			</div>
		</div>
	);
};
