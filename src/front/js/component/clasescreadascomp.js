import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

export const Clasescreadascomp = () => {
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
			<div className="tab-content mt-4 tabpadding">
				<table id="clasesDisp" className="table table-striped no-pad tab-pane active">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nombre</th>
							<th scope="col">Día/Hora</th>
							<th scope="col">Duración</th>
							<th scope="col">Fecha</th>
							<th scope="col">Entrenador</th>
							<th scope="col">Cupo</th>
							<th scope="col">Modificar Clase</th>
						</tr>
					</thead>
					<tbody>
						{store.clasesdisponibles.map((classEl, index) => {
							const f = new Date(classEl.FECHA_INICIO);
							const date = f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear();

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
										<Link to={"/updateclass/" + classEl.NOMBRE}>
											<button
												type="button"
												className="btn btn-outline-success"
												disabled={
													classEl.ESPACIOS > 0 && classEl.ESTADO === "Activo" ? false : true
												}
												onClick={() => {
													actions.getclasstoupdate(index);
												}}>
												Modificar
											</button>
										</Link>
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
