import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron, Carousel, Button } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { dataempresa } = store;
	const { getempresainfo } = actions;
	useEffect(() => {
		getempresainfo();
	}, []);

	return (
		<div className="container">
			<Jumbotron>
				<h1>Somos Kalendar Fit</h1>
				<p>{dataempresa.OTROS} </p>
			</Jumbotron>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://shop.textalk.se/shop/ws91/83391/files/3_1%20Mat%20Girl.jpg?max-width=1140&max-height=380&quality=85&resize=crop"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/carousel-slider-img-2.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://i.pinimg.com/originals/b4/e2/7f/b4e27f3edfe479bf504d1bb08ab70f5f.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
