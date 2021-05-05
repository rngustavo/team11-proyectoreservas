import React, { useContext, setStore } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Contactinfo = props => {
	fetch("https://3001-chocolate-vole-475nxa2x.ws-us03.gitpod.io/api/empresa/1", {
		method: "GET"
	})
		.then(res => res.json())
		.then(data => {
			setStore({ Contactinfo: data.results });
		})
		.catch(err => console.log(err));
	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title> {props.EMPRESA_NOMBRE} </Card.Title>
					<Card.Text>{props.EMPRESA_UBICACION} </Card.Text>
					<Card.Text> {props.EMPRESA_TELEFONO} </Card.Text>
					<Card.Text> {props.EMPRESA_CELULAR} </Card.Text>
					<Card.Text> {props.EMPRESA_DESCRIPCION} </Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};

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
