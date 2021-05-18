import React from "react";
import fGeeksLogo from "../../img/4geeks.png";
import cindeLogo from "../../img/cindeLogo.png";

export const Footer = () => {
	const github = "https://github.com/";
	const devTeam = [
		{ username: "rngustavo", name: "Gustavo Ramirez" },
		{ username: "bramag94", name: "Brandon Mata" },
		{ username: "smorales95", name: "Steven Morales" },
		{ username: "kzs2291", name: "Karol Zuñiga" }
	];
	const logoStyles = {
		heigth: "40px",
		width: "60px"
	};
	return (
		<footer className="container text-center text-white mt-4" style={{ backgroundColor: "#E9ECEF" }}>
			<div className="container pt-4">
				<h2 className="text-dark">Equipo de Desarrollo</h2>
				<section className="mb-4">
					{devTeam.map((m, i) => {
						return (
							<a
								className="btn btn-link btn-floating btn-lg text-dark m-1"
								href={github + m.username}
								role="button"
								data-mdb-ripple-color="dark"
								target="_blank"
								rel="noopener noreferrer"
								key={i}>
								<i className="fab fa-github" />
								<span> {m.name} </span>
							</a>
						);
					})}
				</section>
			</div>
			<div className="text-center text-dark mb-5" style={{ backgroundColor: "#F8F9FA" }}>
				© 2021 Derechos Reservados:
				<a className="text-dark" href="#">
					<span> </span>
					Kalendar Fit
				</a>
			</div>
			<span>
				<img className="mx-2 mb-3" src={fGeeksLogo} style={logoStyles} />
			</span>
			<span>
				<img className="mx-2  mb-3" src={cindeLogo} style={logoStyles} />
			</span>
		</footer>
	);
};
