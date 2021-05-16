import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Disponibilidad = () => {
	const { store, actions } = useContext(Context);
	const { clasesdisponibles } = store;
	const { getclases } = actions;
	useEffect(() => {
		getclases();
	}, []);
	//console.log(clasesdisponibles);

	const nombreDelDiaSegunFecha = fecha => {
		const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
		return dias[fecha.getDay()];
	};

	return (
		<div className="container">
			<nav className="nav nav-pills justify-content-center">
				<a className="nav-item nav-link active" href="#clasesDisp" data-toggle="tab">
					<i className="fas fa-calendar-alt" /> Clases Disponibles
				</a>
			</nav>
			<div>
				{store.clasesdisponibles.map((classEl, index) => {
					const f = new Date(classEl.FECHA_INICIO);
					const date = f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear();
					const dia = nombreDelDiaSegunFecha(f);

					return (
						<div className="card" style={{ width: "18rem" }} key={index}>
							<div className="card-body">
								<h5 className="card-title">
									{index} {classEl.NOMBRE}
								</h5>
								<p className="card-text">Fecha: {date}</p>
								<p className="card-text">Fecha: {date}</p>
								<p className="card-text">Espcacios: {classEl.ESPACIOS}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
