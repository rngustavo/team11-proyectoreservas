import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/carta.scss";

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
			<div>
				{" "}
				<h1 className="titulo"> Clases Disponibles</h1>
			</div>

			<div className="card-deck">
				{store.clasesdisponibles.map((classEl, index) => {
					const f = new Date(classEl.FECHA_INICIO);
					const date = f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear();
					const dia = nombreDelDiaSegunFecha(f);

					return (
						<div className="carta-box" key={index}>
							<div className="carta" style={{ width: "18rem" }}>
								<div className="card-body cara">
									<img
										src="https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif"
										className="card-img-top"
										alt="..."
									/>
									<h1 className="card-title">{classEl.NOMBRE}</h1>
								</div>
								<div className="card-body cara detras">
									<h1 className="card-title">{classEl.NOMBRE}</h1>
									<p className="card-text">Descripción: {classEl.DESCRIPCION}</p>
									<p className="card-text">Fecha: {date}</p>
									<p className="card-text">Duración: {classEl.DURACION}</p>

									<p className="card-text">Espacios: {classEl.ESPACIOS}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
