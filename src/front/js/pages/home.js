import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Jumbotron, Carousel } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { dataempresa } = store;
	const { getempresainfo } = actions;
	useEffect(() => {
		getempresainfo();
	}, []);

	return (
		<div className="container homecus">
			<Jumbotron>
				<h1>Kalendar-Fit</h1>
				<p>{dataempresa.OTROS} </p>
			</Jumbotron>
			<Carousel>
				<Carousel.Item className="carrouselcust">
					<img
						className="d-block w-100"
						src="https://yoga-fit.cmsmasters.net/wp-content/uploads/2015/04/photodune-11523136-exercise-on-mat-s1.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<div className="carrinfo">
							<h3>¿Están preparadas (os)?</h3>
							<p>La primer clase de yoga... !ES GRATIS!</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="carrouselcust">
					<img
						className="d-block w-100"
						src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/carousel-slider-img-2.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<div className="carrinfo">
							<h3>Estás a un paso de tu siguiente gran reto.</h3>
							<p>En Kalendar-Fit tenemos todo lo que necesitas.</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="carrouselcust">
					<img
						className="d-block w-100"
						src="https://www.karateymas.com/wp-content/uploads/2020/07/artes-marciales-menos-conocidas.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<div className="carrinfo">
							<h3>Y vos... ¿ya entrenaste?</h3>
							<p>En KalendarFit no cobramos matrícula, preguntá por nuestas ofertas.</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
