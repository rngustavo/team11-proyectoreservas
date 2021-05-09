import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Disponibilidad = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<nav className="nav nav-pills justify-content-center">
				<a className="nav-item nav-link active" href="#clasesDisp" data-toggle="tab">
					<i className="fas fa-calendar-alt" /> Clases Disponibles
				</a>
			</nav>
			<div className="tab-content mt-4">
				<table id="clasesDisp" className="table table-striped no-pad tab-pane active">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nombre de la Clase</th>
							<th scope="col">Fecha y Hora</th>
							<th scope="col">Cupo</th>
						</tr>
					</thead>
					<tbody>
						{store.classRegistration.map((classEl, index) => {
							return (
								<tr key={index}>
									<th scope="row">{index}</th>
									<td>{classEl.nombreClase}</td>
									<td>{classEl.fechaIni}</td>
									<td>{classEl.cupo}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
