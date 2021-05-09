import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Row, Col, Form, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	const { dataempresa } = store;
	const { getempresainfo } = actions;
	useEffect(() => {
		getempresainfo();
	}, []);
	console.log(dataempresa);

	return (
		<div className="container contactcus">
			<Row>
				<Col>
					<Container>
						<div>
							<h3>Contáctenos</h3>
						</div>
						<Card>
							<Card.Body>
								<Form.Group>
									<Form.Control type="text" placeholder="Nombre" />
									<br />
									<Form.Control type="text" placeholder="Correo" />
									<br />
									<Form.Control type="text" placeholder="Número de contacto" />
									<br />
									<Form.Control type="text" placeholder="Mensaje" />
								</Form.Group>
							</Card.Body>
						</Card>
					</Container>
				</Col>
				<Col>
					<Container>
						<Card>
							<Card.Body>
								<Card.Title>{dataempresa.NOMBRE}</Card.Title>
								<Card.Text>Descripción: {dataempresa.DESCRIPCION}</Card.Text>
								<Card.Subtitle className="mb-2 text-muted">
									Telefono: {dataempresa.TELEFONO}
								</Card.Subtitle>
								<Card.Subtitle className="mb-2 text-muted">
									Celular: {dataempresa.CELULAR}
								</Card.Subtitle>
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
									<i
										className="fab fa-instagram fa-2x d-inline-block align-top"
										width="30"
										height="30"
									/>
								</Card.Link>
							</Card.Body>
						</Card>
					</Container>
				</Col>
			</Row>
			<Row />
		</div>
	);
};
