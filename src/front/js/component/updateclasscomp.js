import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";

export const Updateclasscomp = props => {
	const { actions, store } = useContext(Context);
	const { classupdate } = store;
	const params = useParams();
	const [upd, setUpd] = useState(false);

	const [classes, setNewClass] = useState({
		id: classupdate.ID,
		nombreClase: classupdate.NOMBRE,
		instructor: classupdate.ENTRENADOR,
		lugar: classupdate.LUGAR,
		cupo: classupdate.ESPACIOS,
		duracion: classupdate.DURACION,
		estado: classupdate.ESTADO,
		descripcion: classupdate.DESCRIPCION,
		precio: classupdate.PRECIO,
		fechaIni: classupdate.FECHA_INICIO,
		fechaFin: classupdate.FECHA_INICIO
	});

	// const { getclases } = actions;
	// useEffect(() => {
	// 	getclases();
	// }, []);

	const handleChange = e => {
		const { name, value } = e.target;
		setNewClass(classes => ({
			...classes,
			[name]: value
		}));
	};

	const registerData = () => {
		handleChange();
	};

	return (
		<div className="container">
			<form>
				<div className="form-group">
					<h6>Nombre de la Clase</h6>
					<input
						type="text"
						className="form-control"
						onChange={handleChange}
						id="exampleFormControlInput1"
						placeholder="Nombre de la clase"
						name="nombreClase"
						value={classes.nombreClase}
						required
					/>
				</div>
				<div className="form-group">
					<h6>Nombre del Instructor</h6>
					<input
						type="text"
						className="form-control"
						onChange={handleChange}
						id="exampleFormControlInput1"
						placeholder="Nombre del Instructor"
						name="instructor"
						value={classes.instructor}
						required
					/>
				</div>
				<div className="form-group">
					<h6>Lugar</h6>
					<select
						className="form-control"
						onChange={handleChange}
						name="lugar"
						id="exampleFormControlSelect1"
						required>
						<option selected="selected">{classupdate.LUGAR}</option>
						<option>San José</option>
						<option>Alajuela</option>
						<option>Cartago</option>
						<option>Guanacaste</option>
						<option>Heredia</option>
						<option>Limón</option>
						<option>Puntarenas</option>
					</select>
				</div>
				<div className="form-group">
					<h6>Cupo</h6>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput2"
						onChange={handleChange}
						name="cupo"
						placeholder="Cupo"
						value={classes.cupo}
						required
					/>
				</div>
				<div className="form-group">
					<h6>Tiempo de duracion</h6>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput2"
						onChange={handleChange}
						name="duracion"
						placeholder="Tiempo de duracion"
						value={classes.duracion}
						required
					/>
				</div>

				<div className="form-group">
					<h6>Estado</h6>
					<select
						className="form-control"
						onChange={handleChange}
						name="estado"
						id="exampleFormControlSelect1"
						required>
						<option selected="selected">{classupdate.ESTADO}</option>
						<option>Activo</option>
						<option>Inactivo</option>
					</select>
				</div>
				<div className="form-group">
					<h6>Descripcion</h6>
					<textarea
						className="form-control"
						onChange={handleChange}
						name="descripcion"
						id="exampleFormControlTextarea1"
						rows="3"
						value={classes.descripcion}
						required
					/>
				</div>

				<div className="form-group">
					<h6>Precio</h6>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput2"
						onChange={handleChange}
						name="precio"
						placeholder="Precio"
						value={classes.precio}
						required
					/>
				</div>
				<div className="form-group">
					<h6>Fecha y Hora de Inicio</h6>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput2"
						onChange={handleChange}
						name="fechaIni"
						placeholder="DD/MM/YYYY HH:MM AM/PM"
						value={classes.fechaIni}
						required
					/>
				</div>
				<div className="form-group">
					<h6>Fecha y Hora de Finalizacion</h6>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput2"
						onChange={handleChange}
						name="fechaFin"
						placeholder="DD/MM/YYYY HH:MM AM/PM"
						value={classes.fechaFin}
						required
					/>
				</div>

				<button
					formMethod="submit"
					type="button"
					className="btn btn-primary"
					onClick={handleChange}
					data-toggle="modal"
					data-target="#exampleModal">
					Actualizar Clase
				</button>
			</form>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				role="dialog"
				aria-h6ledby="exampleModalh6"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalh6">
								Registro de Clase
							</h5>
							<button
								type="button"
								className="close"
								onClick={registerData}
								data-dismiss="modal"
								aria-h6="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<ul>
								<li>
									<strong>Clase: </strong> {classes.nombreClase}
								</li>
								<li>
									<strong>Profesor: </strong> {classes.instructor}
								</li>
								<li>
									<strong>Lugar: </strong> {classes.lugar}
								</li>
								<li>
									<strong>Cupo: </strong> {classes.cupo}
								</li>
								<li>
									<strong>Tiempo de duracion: </strong> {classes.duracion}
								</li>
								<li>
									<strong>Estado: </strong> {classes.estado}
								</li>
								<li>
									<strong>Descripcion: </strong> {classes.descripcion}
								</li>
								<li>
									<strong>Precio: </strong> {classes.precio}
								</li>
								<li>
									<strong>Fecha y Hora Inicio: </strong>
									{classes.fechaIni}
								</li>
								<li>
									<strong>Fecha y Hora Finalizacion: </strong> {classes.fechaFin}
								</li>
							</ul>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Cerrar
							</button>

							<button
								type="button"
								className="btn btn-primary"
								data-dismiss="modal"
								onClick={() => actions.updatetoClass(classes) + setUpd(true)}>
								¿Desea mantener los cambios?
							</button>
							{upd ? <Redirect to="/clasescreadas" /> : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
Updateclasscomp.propTypes = {
	match: PropTypes.object
};
