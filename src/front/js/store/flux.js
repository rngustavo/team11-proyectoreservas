const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			classRegistration: [],
			classParticipants: [],
			token: [],
			login: false,
			islogin: false,
			dataempresa: {
				CELULAR: "9999 8888",
				DESCRIPCION: "del palo de cas 500 varas",
				FOTO_FONDO: ".//fotos/principal.jpg",
				ID: 1,
				LATITUD: "10 10 10",
				LOGO: "..//fotos/logo.jpg",
				LONGITUD: "20 20 20",
				NOMBRE: "compania demo",
				OTROS: "por si acaso",
				TELEFONO: "8888 9999",
				UBICACION: "provincia demo"
			},
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			updateClassRegistration: newClass => {
				const store = getStore();
				store.classRegistration.push(newClass);
			},

			registerToClass: index => {
				const store = getStore();
				const actions = getActions();

				const classRegistration = store.classRegistration.map((elm, i) => {
					if (i === index) elm.cupo = elm.cupo - 1;
					return elm;
				});

				setStore({ classRegistration: classRegistration });

				actions.updateRegisteredClasses(classRegistration, index);
			},

			updateRegisteredClasses: (inArr, idx) => {
				const store = getStore();

				const registeredClass = (({ nombreClase, fechaIni }) => ({ nombreClase, fechaIni }))(inArr[idx]);

				store.classParticipants.push(registeredClass);
			},

			dropFromClass: toRemove => {
				const store = getStore();

				const myUpdatedClasses = store.classParticipants.filter((item, index) => index !== toRemove);

				setStore({ classParticipants: myUpdatedClasses });
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setLogin: loggin => {
				const store = getStore();
				setStore({ islogin: loggin });
			},

			getempresainfo: () => {
				fetch(process.env.BACKEND_URL + "/api/empresa/1") //trae el api
					.then(resp => resp.json()) //llama  en json
					.then(data => setStore({ dataempresa: data.result })) //asigna el "result" en "dataempresa"
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
