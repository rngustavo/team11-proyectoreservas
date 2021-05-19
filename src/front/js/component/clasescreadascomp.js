import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import "../../styles/index.scss";
export const Clasescreadascomp = () => {
	const { store, actions } = useContext(Context);
	const { clasesdisponibles } = store;
	const { getclases, nombreDelDiaSegunFecha } = actions;
	const [del, setDel] = useState(false);

	return (
		<div className="container ">
			<div className="encabezado posTit">
				<div className="container">
					<div className="row">
						<div className="col-sm" />
						<div className="col-sm">
							<h2 className="posTit">CLASES CREADAS</h2>
						</div>
						<div className="col-sm">
							<Link to="/crearclase">
								<button className="btn botones2">Crear una clase</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="tab-content mt-4 tabpadding2">
				<table id="clasesDisp" className="table no-pad tab-pane active ">
					<thead className="tablareservas">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nombre</th>
							<th scope="col">Día/Hora</th>
							<th scope="col">Duración</th>
							<th scope="col">Fecha</th>
							<th scope="col">Entrenador</th>
							<th scope="col">Cupo</th>
							<th scope="col">Estado</th>
							<th scope="col">Modificar Clase</th>
							<th scope="col">Eliminar Clase</th>
						</tr>
					</thead>
					<tbody>
						{store.clasesdisponibles.map((classEl, index) => {
							var fech = classEl.FECHA_INICIO.slice(0, -13);
							fech = fech + " " + classEl.HORA_INICIO;

							const f = new Date(fech);
							const date = f.toLocaleDateString();
							const dia = nombreDelDiaSegunFecha(f);

							return (
								<tr key={classEl.ID}>
									<th scope="row">{index}</th>
									<td>{classEl.NOMBRE}</td>
									<td>
										{classEl.DIA_SEMANA} {classEl.HORA_INICIO}
									</td>
									<td>{classEl.DURACION}</td>
									<td>{date}</td>
									<td>{classEl.ENTRENADOR}</td>
									<td>{classEl.ESPACIOS}</td>
									<td>{classEl.ESTADO}</td>
									<td>
										<Link to={"/updateclass/" + classEl.ID}>
											<button
												type="button"
												className="btn btn-outline-success"
												onClick={() => {
													actions.getclasstoupdate(classEl);
												}}>
												Modificar
											</button>
										</Link>
									</td>
									<td>
										<button
											type="button"
											className="btn botones2"
											onClick={() => {
												swal({
													title: "¿Desea eliminarlo?",
													text: "Si elimina esta clase, no podrá recuperarla.",
													icon: "warning",
													buttons: true,
													dangerMode: true
												}).then(willDelete => {
													if (willDelete) {
														actions.deleteclasscreate(classEl.ID);

														swal("Clase Eliminada!", {
															icon: "success"
														});
														setDel(true);
													} else {
														setDel(false);
													}
												});
											}}>
											<span className="izq fas fa-times" />
										</button>
										{del ? <Redirect to="/clasescreadas" /> : null}
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
