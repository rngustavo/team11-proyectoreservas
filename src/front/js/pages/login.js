import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import { propTypes } from "react-bootstrap/esm/Image";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mensaje, setmensaje] = useState("");
	const { store, actions } = useContext(Context);
	const [islogin, setIsLogin] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};
		//setLogin(true);
		// fetch de LOGIN
		fetch("https://3001-emerald-bat-9onafycu.ws-us04.gitpod.io/api/login", {
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
				store.token = data.token;
				console.log(store.token);
				if (store.token != undefined) {
					//sessionStorage.setItem("my_token", data.token);
					setIsLogin(true);
					console.log(islogin);
					alert("Logeado Correctamente");
					//setmensaje("");
				} else {
					alert(data.msg);
					setIsLogin(false);
					store.token = undefined;
				}

				// let token = sessionStorage.getItem("my_token")
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container-fluid pos">
			{console.log(store.token)}
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Sign In</h3>
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
									Login
								</button>
							</div>
						</form>
						{islogin ? <Redirect to="/" /> : null}
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							Dont have an account?
							<Link to="/register">
								<a>Register</a>
							</Link>
						</div>
						<div className="d-flex justify-content-center">
							<a href="#">Forgot your password?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
