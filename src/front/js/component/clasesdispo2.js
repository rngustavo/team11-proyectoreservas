import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Clasedispo = () => {
	const { store, actions } = useContext(Context);
	const { clasesdisponibles, misclasesreservadas } = store;
	const {
		getclases,
		updateRegisteredClassesAPI,
		registerToClass,
		nombreDelDiaSegunFecha,
		getmisclasesreservadas
	} = actions;

	/* useEffect(() => {
		//getclases();
		getmisclasesreservadas();
    }, []); */

	const reservar = (id, index) => {
		updateRegisteredClassesAPI(id);
		//getclases();
	};

	/* const isreservada = clase => {
		
		return misclasesreservadas.includes(clase);
    }; */

	const isreservada = clase => {
		let existeclase = misclasesreservadas.map(function(obj) {
			if (clase.ID == obj.ID) {
				return true;
			} else return false;
		});

		return existeclase.includes(true);
		//return misclasesreservadas.includes(clase);
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
							<th scope="col">Día/Hora</th>
							<th scope="col">Duración</th>
							<th scope="col">Fecha</th>
							<th scope="col">Entrenador</th>
							<th scope="col">Cupo</th>
							<th scope="col">Disponibles</th>
							<th scope="col">Reservar Clase</th>
						</tr>
					</thead>
					<tbody>
						{clasesdisponibles.map((classEl, index) => {
							const f = new Date(classEl.FECHA_INICIO);
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
									<td>{classEl.ESPACIOS_DISPONIBLES}</td>
									<td>
										<button
											type="button"
											className="btn btn-outline-success"
											disabled={isreservada(classEl) ? true : false}
											onClick={() => {
												reservar(classEl.ID, index);
											}}>
											{isreservada(classEl) ? "Reservada " : "Reservar"}
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
							<th scope="col">Día/Hora</th>
							<th scope="col">Duración</th>
							<th scope="col">Entrenador</th>
							<th scope="col">Clase Reservada</th>
						</tr>
					</thead>
					<tbody>
						{store.misclasesreservadas.map((classRl, index) => {
							return (
								<tr key={index}>
									<th scope="row">{index}</th>
									<td>{classRl.NOMBRE}</td>
									<td>
										{classRl.DIA_SEMANA} / {classRl.HORA_INICIO}
									</td>
									<td>{classRl.DURACION}</td>
									<td>{classRl.ENTRENADOR}</td>
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
