import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import { Context } from "../store/appContext";

export const Tiendacomp = () => {
	const { store, actions } = useContext(Context);
	const { getarticulosmerclib } = actions;
	const { articulos } = store;
	const { imagen } = store;

	useEffect(() => {
		getarticulosmerclib();
	}, []);
	return (
		<Container>
			<CardColumns>
				{store.articulos.map((art, index) => {
					return (
						<Card
							className="col-sm"
							key={index}
							style={{ width: "20rem", height: "18rem", marginLeft: "20px" }}>
							<Card.Img style={{ height: "7rem" }} variant="top" src={imagen[index]} />
							<Card.Body>
								<Card.Title>{art.name}</Card.Title>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.mercadolibre.com.ar/c/deportes-y-fitness"
									className="btn btn-warning"
									role="button"
									data-bs-toggle="button">
									Ir a Mercado Libre
								</a>
							</Card.Body>
							<Card.Footer className="text-muted">
								Cantidad de Ariculos {art.total_items_in_this_category}
							</Card.Footer>
						</Card>
					);
				})}
				;
			</CardColumns>
		</Container>
	);
};
