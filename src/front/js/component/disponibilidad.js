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
			<div className="tab-content mt-4">
				<table id="clasesDisp" className="table table-striped no-pad tab-pane active tabpadding">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nombre de la Clase</th>
							<th scope="col">Fecha y Hora</th>
							<th scope="col">Cupo</th>
						</tr>
					</thead>
					<tbody>
						{store.clasesdisponibles.map((classEl, index) => {
							const f = new Date(classEl.FECHA_INICIO);
							const date = f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear();
							console.log("fecha pura", f);
							console.log("dia", f.getDay()); // 2 (Martes)
							console.log("nose", f.getDate()); // 30
							console.log("mes", f.getMonth()); // 0 (Enero)
							console.log("year", f.getFullYear());
							const dia = nombreDelDiaSegunFecha(f);

							return (
								<tr key={index}>
									<th scope="row">{index}</th>
									<td>{classEl.NOMBRE}</td>
									<td>{date}</td>
									<td>{classEl.ESPACIOS}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
