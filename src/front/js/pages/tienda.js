import React, { useState, useContext } from "react";
import { Tiendacomp } from "../component/tiendacomp";
import "../../styles/demo.scss";

import { Context } from "../store/appContext";

export const Tienda = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="titmerc">
				<img
					style={{ width: "5rem" }}
					src="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2"
				/>
				<h2>Implementos Deportivos</h2>
			</div>
			<div>
				<Tiendacomp />
			</div>
		</div>
	);
};
