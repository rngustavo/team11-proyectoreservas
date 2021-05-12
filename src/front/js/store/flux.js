const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			//classRegistration: [],
			//classParticipants: [],
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
			],
			clasesdisponibles: [
				{
					DESCRIPCION: "conozca las ultimas tecnicas sagradas de kami",
					DIA_SEMANA: "Miercoles",
					DURACION: 60,
					ENTRENADOR: "mr Popo",
					ESPACIOS: 10,
					ESPACIOS_DISPONIBLES: 10,
					ESTADO: "Publicada",
					FECHA_INICIO: "Mon, 03 May 2021 00:00:00 GMT",
					FOTO: "..//fotos/actividad_kempo.jpg",
					HORA_INICIO: "20:00",
					ID: 1,
					LUGAR: "templo sagrada kamizama",
					NOMBRE: "kempo",
					PRECIO: 0
				}
			],
			misclasesreservadas: [
				{
					DESCRIPCION: "conozca las ultimas tecnicas sagradas de kami",
					DIA_SEMANA: "Miercoles",
					DURACION: 60,
					ENTRENADOR: "Mr. Satán ",
					ESPACIOS: 10,
					ESPACIOS_DISPONIBLES: 10,
					ESTADO: "Publicada",
					FECHA_INICIO: "Mon, 03 May 2021 00:00:00 GMT",
					FOTO: "..//fotos/actividad_kempo.jpg",
					HORA_INICIO: "20:00",
					ID: 1,
					LUGAR: "templo sagrada kamizama",
					NOMBRE: "kempo",
					PRECIO: 0
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			ErrorApi: status => {
				if (status > 200) alert("error: " + status);
			},

			updateClassRegistration: newClass => {
				const store = getStore();
				const actions = getActions();
				store.classRegistration.push(newClass);
				actions.updateClassRegistrationApi(newClass);
			},
			nombreDelDiaSegunFecha: fecha => {
				const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
				return dias[fecha.getDay()];
			},

			updateClassRegistrationApi: Class => {
				const actions = getActions();
				//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
				console.log("fecha original", Class.fechaIni);
				let fechaInicio = `${Class.fechaIni.substring(6, 10)}-${Class.fechaIni.substring(
					3,
					5
				)}-${Class.fechaIni.substring(0, 2)}T${Class.fechaIni.substring(11, 13)}:${Class.fechaIni.substring(
					14,
					16
				)}:00Z`;
				console.log("fecha original", fechaInicio);
				fechaInicio = new Date(fechaInicio);
				console.log("fecha convertida", fechaInicio);
				const dia = actions.nombreDelDiaSegunFecha(fechaInicio);

				var myHeaders = new Headers();
				/* myHeaders.append(
					"Authorization",
					"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYyMDQzMTE5OCwianRpIjoiZDllYjU1NDAtZTU4MS00NTk4LWE3NzYtMDkzOTM3NWM2ZDEzIiwibmJmIjoxNjIwNDMxMTk4LCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoxLCJleHAiOjE2MjA0MzIwOTh9.thRcfOORtgkTarTFo6AbBmGGpVmC9eWZIMWcg_9rCbo"
				); */
				myHeaders.append("Content-Type", "application/json");
				const jsonClase = {
					NOMBRE: Class.nombreClase,
					ENTRENADOR: Class.instructor,
					LUGAR: Class.lugar,
					PRECIO: Class.precio,
					ESPACIOS: Class.cupo,
					DESCRIPCION: Class.descripcion,
					ESTADO: Class.estado,
					DIA_SEMANA: dia, // "Lunes",
					FECHA_INICIO: fechaInicio, //"Mon, 03 May 2021 00:00:00 GMT", // Class.fechaIni,
					HORA_INICIO: fechaInicio.toLocaleTimeString().substring(0, 5), //`${f.getHours()}:${f.getMinutes()}`, //"20:00",
					DURACION: Class.duracion,
					FOTO: "..//fotos/actividad_kempo.jpg",
					EMPRESA_ID: 1 // por el momento es solo una empresa se debe cambiar a variable de empresa
				};
				console.log("ruta", process.env.BACKEND_URL);
				console.log("jsonClase", jsonClase);
				fetch(process.env.BACKEND_URL + "/api/clases", {
					method: "POST",
					body: JSON.stringify(jsonClase),
					headers: myHeaders
				})
					.then(resp => {
						console.log("respuesta SubirClase ", resp.ok); // will be true if the response is successfull
						console.log("status SubirClase", resp.status); // the status code = 200 or code = 400 etc.
						console.log("texto SubirClase", resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => setStore({ message: data.msg }))
					.catch(error => {
						console.log("Error SubirClase", error);
					});
			},

			/* registerToClass: index => {
				const store = getStore();
				const actions = getActions();

				const classRegistration = store.classRegistration.map((elm, i) => {
					if (i === index) elm.cupo = elm.cupo - 1;
					return elm;
				});

				setStore({ classRegistration: classRegistration });

				actions.updateRegisteredClasses(classRegistration, index);
			}, */

			/* updateRegisteredClasses: (inArr, idx) => {
				const store = getStore();

				const registeredClass = (({ nombreClase, fechaIni }) => ({ nombreClase, fechaIni }))(inArr[idx]);

				store.classParticipants.push(registeredClass);
			}, */

			//clase matriculada por el usuario
			updateRegisteredClassesAPI: registeredClass => {
				const actions = getActions();

				const token = sessionStorage.getItem("my_token");
				let myHeaders = new Headers();
				const jsonClase = "";
				myHeaders.append("Authorization", "Bearer " + token);
				myHeaders.append("Content-Type", "application/json");
				//console.log("headers", myHeaders.get("Authorization"));
				fetch(process.env.BACKEND_URL + "/api/matricularclase/" + registeredClass, {
					method: "POST",
					body: JSON.stringify(jsonClase),
					headers: myHeaders
				})
					.then(resp => {
						/* console.log("respuesta MatricularClase ", resp.ok);
						console.log("status MatricularClase", resp.status);
						console.log("texto MatricularClase", resp.text()); */
						actions.ErrorApi(resp.status);
						return resp.json();
					})
					.then(data => {
						setStore({ message: data.msg });
						actions.getclases();
						actions.getmisclasesreservadas();
						//alerta si fue exitosa
						swal({
							title: "Correcto!",
							text: "Se ha matriculado Exitosamente",
							icon: "success",
							button: "Aceptar"
						});
					})
					.catch(error => {
						console.log("Error MatricularClase", error);
					});
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
			},

			getclases: () => {
				fetch(process.env.BACKEND_URL + "/api/clases") //trae el api
					.then(resp => resp.json()) //llama  en json
					.then(data => setStore({ clasesdisponibles: data.results })) //asigna el "result" en "dataempresa"
					.catch(error => console.log("Error loading message from backend", error));
			},

			getmisclasesreservadas: () => {
				const token = sessionStorage.getItem("my_token");
				console.log("entré");
				let myHeaders = new Headers();
				const jsonClase = "";
				myHeaders.append("Authorization", "Bearer " + token);
				myHeaders.append("Content-Type", "application/json");
				fetch(process.env.BACKEND_URL + "/api/clasesreservadas", {
					method: "GET",
					//body: JSON.stringify(jsonClase),
					headers: myHeaders
				})
					.then(resp => resp.json()) //llama  en json
					.then(data => setStore({ misclasesreservadas: data.result }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
