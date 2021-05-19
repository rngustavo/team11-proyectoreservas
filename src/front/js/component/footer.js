import React from "react";
import fGeeksLogo from "../../img/4geeks.png";
import cindeLogo from "../../img/cinde.png";
import "../../styles/navbar.scss";

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
		<footer className="container text-center text-white mt-4 footercust">
			<div className="pt-2">
				<h3 className="footertext">EQUIPO DE DESARROLLO</h3>
				<section className="footernames">
					{devTeam.map((m, i) => {
						return (
							<a
								className="btn btn-link btn-floating btn-lg footertext"
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
			<div className="text-center footertext mb-2">
				© 2021 Derechos Reservados:
				<a className="footertext" href="#">
					<span> </span>
					Kalendar Fit
				</a>
			</div>
			<span>
				<img className="mx-2 mb-3 fimg" src={fGeeksLogo} style={logoStyles} />
			</span>
			<span>
				<img className="mx-2  mb-3 fimg2" src={cindeLogo} />
			</span>
		</footer>
	);
};
