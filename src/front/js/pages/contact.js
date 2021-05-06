import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Row, Col, Form, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Contact = props => {
	const { store, actions } = useContext(Context);
	const { dataempresa } = useParams();
	console.log(dataempresa);
	const selected = store.dataempresa;
	console.log(selected);

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
								<Card.Title>{selected.EMPRESA_NOMBRE}</Card.Title>
								<Card.Text>Ubicación {selected.EMPRESA_UBICACION}</Card.Text>
								<Card.Subtitle className="mb-2 text-muted">
									Telefono: {selected.EMPRESA_TELEFONO}
								</Card.Subtitle>
								<Card.Subtitle className="mb-2 text-muted">
									Celular: {selected.EMPRESA_CELULAR}
								</Card.Subtitle>
								<Card.Text>Ubicación {selected.EMPRESA_UBICACION};</Card.Text>
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

	Contactinfo.propTypes = {
		EMPRESA_ID: PropTypes.integrer,
		EMPRESA_NOMBRE: PropTypes.string,
		EMPRESA_UBICACION: PropTypes.string,
		EMPRESA_TELEFONO: PropTypes.string,
		EMPRESA_CELULAR: PropTypes.string,
		EMPRESA_DESCRIPCION: PropTypes.string,
		EMPRESA_LATITUD: PropTypes.string,
		EMPRESA_LONGITUD: PropTypes.string,
		EMPRESA_OTROS: PropTypes.string,
		EMPRESA_FOTO_FONDO: PropTypes.string,
		EMPRESA_LOGO: PropTypes.string
	};
};
