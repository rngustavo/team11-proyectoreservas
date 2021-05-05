import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Row, Col, Form, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Contactinfo } from "../component/Contactinfo";
import PropTypes from "prop-types";

export const Contact = () => {
	const { Contactinfo } = useContext(Context);
	console.log("data", store.Contactinfo);

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
								<Card.Title>{Contactinfo.EMPRESA_NOMBRE}</Card.Title>
								<Card.Text>Ubicación {Contactinfo.EMPRESA_DESCRIPCION}</Card.Text>
								<Card.Subtitle className="mb-2 text-muted">
									Telefono: {Contactinfo.EMPRESA_TELEFONO}
								</Card.Subtitle>
								<Card.Subtitle className="mb-2 text-muted">
									Celular: {Contactinfo.EMPRESA_CELULAR}
								</Card.Subtitle>
								<Card.Text>Ubicación {Contactinfo.EMPRESA_UBICACION};</Card.Text>
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
