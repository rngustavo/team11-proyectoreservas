import React, { useContext, useEffect, useState, useForm } from "react";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { Row, Col, Form, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import emailjs from "emailjs-com";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	const { dataempresa } = store;
	const { getempresainfo } = actions;
	const [email, setEmail] = useState("");
	const [nombre, setNombre] = useState("");
	const [mensaje, setMensaje] = useState("");
	const [contacto, setContacto] = useState("");
	useEffect(() => {
		getempresainfo();
	}, []);

	const handleChange = e => {
		e.preventDefault();
		// emailcontact(email,nombre,mensaje,contacto)

		emailjs
			.send(
				"service_5nvjbjn",
				"template_tlhp4ld",
				{
					from_name: nombre,
					cc: email,
					message: "Mensaje:" + mensaje + "\n " + "Teléfono:" + contacto,
					from_email: "khalenderclass@gmail.com",
					reply_to: email
				},
				"user_fxYYnkIXSTkQgA4JhUyfn"
			)
			.then(result => {
				swal({
					title: "Exito!",
					text: "Se ha recibido su mensaje, se le respondera lo mas breve posible",
					icon: "success",
					button: "Aceptar"
				});
			});
		setNombre("");
		// e.currentTarget.reset();
	};

	return (
		<Container>
			<Row>
				<Col>
					<h3>Contáctenos</h3>

					<Card>
						<Card.Body>
							<Form.Group>
								<Form.Control
									type="text"
									placeholder="Nombre"
									onChange={e => {
										setNombre(e.target.value);
									}}
								/>
								<br />
								<Form.Control
									type="text"
									placeholder="Correo"
									onChange={e => {
										setEmail(e.target.value);
									}}
								/>
								<br />
								<Form.Control
									type="text"
									placeholder="Número de contacto"
									onChange={e => {
										setContacto(e.target.value);
									}}
								/>
								<br />
								<Form.Control
									as="textarea"
									rows={2}
									placeholder="Mensaje"
									onChange={e => {
										setMensaje(e.target.value);
									}}
								/>
							</Form.Group>
							<button
								formMethod="submit"
								type="button"
								className="btn btn-primary"
								onClick={handleChange}
								data-toggle="modal"
								data-target="#exampleModal">
								Enviar Mensaje
							</button>
						</Card.Body>
					</Card>
				</Col>

				<Col style={{ marginTop: "40px" }}>
					<Card>
						<Card.Body>
							<Card.Title>{dataempresa.NOMBRE}</Card.Title>
							<Card.Text>Descripción: {dataempresa.DESCRIPCION}</Card.Text>
							<Card.Subtitle className="mb-2 text-muted">Telefono: {dataempresa.TELEFONO}</Card.Subtitle>
							<Card.Subtitle className="mb-2 text-muted">Celular: {dataempresa.CELULAR}</Card.Subtitle>
							<Card.Text>Ubicación {dataempresa.UBICACION};</Card.Text>
							<p>Buscanos en nuestras redes sociales</p>
							<Card.Link href="#">
								<i
									className="fab fa-facebook-square fa-2x d-inline-block align-top"
									width="30"
									height="30"
								/>
							</Card.Link>
							<Card.Link href="#">
								<i className="fab fa-instagram fa-2x d-inline-block align-top" width="30" height="30" />
							</Card.Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col style={{ marginTop: "8px" }}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0237068858114!2d-84.10079248571843!3d9.931983476928021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3530716003f%3A0xad3da4eeb0d286bb!2sTorre%20Universal!5e0!3m2!1ses!2scr!4v1621051310526!5m2!1ses!2scr"
						style={{
							width: "100%",
							height: "250px",
							border: "0",
							allowFullScreen: "",
							loading: "lazy"
						}}
					/>
				</Col>
			</Row>
		</Container>
	);
};
