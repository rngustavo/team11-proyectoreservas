import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from "react-router-dom";
import "../../styles/index.scss";

export const Class = () => {
	registerLocale("es", es);
	const { actions } = useContext(Context);
	const [startDate, setStartDate] = useState(new Date());
	//const [endDate, setEndDate] = useState(new Date());
	const [classes, setNewClass] = useState({
		nombreClase: "",
		instructor: "",
		lugar: "",
		cupo: "",
		duracion: "",
		estado: "",
		descripcion: "",
		precio: "",
		horaIni: startDate.toLocaleDateString() + " " + startDate.toLocaleTimeString()
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setNewClass(classes => ({
			...classes,
			[name]: value
		}));

		setNewClass[(classes.horaIni, startDate)];
	};

	const registerData = () => {
		handleChange();
	};

	const [upd, setUpd] = useState(false);

	return (
		<div className="container">
			<form>
				<div className="row">
					<div className="col" />
					<div className="col-6">
						<h1 className="titulo">REGISTRAR CLASE</h1>
					</div>
					<div className="col" />
				</div>
				<div className="form-group">
					<h6>Nombre de la Clase</h6>
					<input
						type="text"
						className="form-control"
						onChange={handleChange}
						id="exampleFormControlInput1"
						placeholder="Nombre de la clase"
						name="nombreClase"
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
						<option />
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
						<option />
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
						required
					/>
				</div>
				<div className="form-group">
					<h6>Fecha y hora de Inicio</h6>
					<div className="row">
						<div className="col-4">
							<DatePicker
								timeInputLabel="Hora:"
								dateFormat="dd/MM/yyyy h:mm aa"
								showTimeInput
								className="form-control"
								selected={startDate}
								name="horaIni"
								onChange={date => setStartDate(date)}
								locale="es"
							/>
						</div>
					</div>
				</div>

				<button
					formMethod="submit"
					type="button"
					className="btn botones"
					onClick={handleChange}
					data-toggle="modal"
					data-target="#exampleModal">
					Registrar Clase
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
									<strong>Fecha y hora de Inicio: </strong>
									{"'" + startDate.toLocaleDateString() + " " + startDate.toLocaleTimeString() + "'"}
								</li>
							</ul>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Cerrar
							</button>

							<button
								type="button"
								className="btn botones"
								data-dismiss="modal"
								onClick={() => actions.updateClassRegistrationApi(classes, startDate) + setUpd(true)}>
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
