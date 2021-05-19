import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/carta.scss";

export const Disponibilidad = () => {
	const { store, actions } = useContext(Context);
	const { clasesdisponibles, imgdisponibles } = store;
	const { getclases, nombreDelDiaSegunFecha } = actions;
	useEffect(() => {
		getclases();
	}, []);

	return (
		<div className="container">
			<div>
				{" "}
				<h1 className="titulo"> CLASES DISPONIBLES</h1>
			</div>

			<div className="card-deck">
				{clasesdisponibles.map((classEl, index) => {
					const f = new Date(classEl.FECHA_INICIO);
					const date = f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear();
					const dia = nombreDelDiaSegunFecha(f);

					return (
						<div className="carta-box" key={index}>
							<div className="carta" style={{ width: "18rem" }}>
								<div className="card-body cara">
									<img src={imgdisponibles[index]} className="card-img-top cartaimg" alt="..." />
									<h1 className="card-title caratitulo">{classEl.NOMBRE}</h1>
								</div>
								<div className="card-body cara detras">
									<h1 className="card-title titulocarta">{classEl.NOMBRE}</h1>
									<p className="card-text">Descripción: {classEl.DESCRIPCION}</p>
									<p className="card-text">Día: {classEl.DIA_SEMANA}</p>
									<p className="card-text">Fecha: {date}</p>
									<p className="card-text">Duración: {classEl.DURACION}</p>
									<p className="card-text">Entrenador: {classEl.ENTRENADOR}</p>
									<p className="card-text">Espacios: {classEl.ESPACIOS}</p>
									<p className="card-text">Precio: {classEl.PRECIO}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
