import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Clasedispo = () => {
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
		<div className="container ">
			<nav className="nav nav-pills justify-content-center navpillsclass">
				<a className="nav-item nav-link active" href="#clasesDisp" data-toggle="tab">
					<i className="fas fa-calendar-alt" /> Clases Disponibles
				</a>
				<a className="nav-item nav-link" href="#clasesRes" data-toggle="tab">
					<i className="fas fa-calendar-check" /> Clases Reservadas
				</a>
			</nav>
			<div className="tab-content mt-4 tabpadding">
				<table id="clasesDisp" className="table table-striped no-pad tab-pane active">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nombre</th>
							<th scope="col">Fecha</th>
							<th scope="col">Duración</th>
							<th scope="col">Fecha</th>
							<th scope="col">Entrenador</th>
							<th scope="col">Cupo</th>
							<th scope="col">Reservar Clase</th>
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
									<td>
										{classEl.DIA_SEMANA} {classEl.HORA_INICIO}
									</td>
									<td>{classEl.DURACION}</td>
									<td>{date}</td>
									<td>{classEl.ENTRENADOR}</td>
									<td>{classEl.ESPACIOS}</td>
									<td>
										<button
											type="button"
											className="btn btn-outline-success"
											disabled={
												classEl.ESPACIOS > 0 && classEl.ESTADO === "Activo" ? false : true
											}
											onClick={() => {
												actions.registerToClass(index);
											}}>
											Reservar
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<table id="clasesRes" className="table table-striped no-pad tab-pane">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nombre de la Clase</th>
							<th scope="col">Fecha y Hora</th>
							<th scope="col">Clase Reservada</th>
						</tr>
					</thead>
					<tbody>
						{store.classParticipants.map((classEl, index) => {
							return (
								<tr key={index}>
									<th scope="row">{index}</th>
									<td>{classEl.nombreClase}</td>
									<td>{classEl.fechaIni}</td>
									<td>
										<button
											type="button"
											className="btn btn-outline-success"
											onClick={() => {
												actions.dropFromClass(index);
											}}>
											Eliminar
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
