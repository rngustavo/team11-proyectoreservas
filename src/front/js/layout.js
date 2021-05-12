import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

import injectContext from "./store/appContext";

import { Navbar1 } from "./component/navbar";
import { Footer } from "./component/footer";
import { Contact } from "./pages/contact";

import { Forgotpassword } from "./pages/forgotpassword";
import { Resetpassword } from "./pages/resetpassword";

import { Classview } from "./pages/classview";
import { Myclasedispo } from "./pages/vistaclasedispo";
import { Dispoview } from "./pages/dispoview";

import { Misclasescreadas } from "./pages/clasescreadas";
import { Updateclass } from "./pages/updateclass";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar1 />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/forgotpassword">
							<Forgotpassword />
						</Route>
						<Route exact path="/resetpassword">
							<Resetpassword />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/crearclase">
							<Classview />
						</Route>
						<Route exact path="/misclases">
							<Myclasedispo />
						</Route>
						<Route exact path="/clasedisponibles">
							<Dispoview />
						</Route>
						<Route exact path="/clasescreadas">
							<Misclasescreadas />
						</Route>
						<Route exact path="/updateclass/:theid">
							<Updateclass />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
