#carga de datos iniciales de trabajo


list_usuarios=[
    {        
        "USUARIO_EMAIL" : "prueba1@gmail.com",
        "USUARIO_PASSWORD":"123",
        "USUARIO_IS_ACTIVE": "True",
        "USUARIO_IS_ADMIN": "False" 
        },
    {        
        "USUARIO_EMAIL" : "prueba2@gmail.com",
        "USUARIO_PASSWORD": "123",
        "USUARIO_IS_ACTIVE": "True",
        "USUARIO_IS_ADMIN": "True"
        },
]

list_empresa=[
    {       
        "EMPRESA_NOMBRE":"Kalendar Fit" ,
        "EMPRESA_UBICACION":"Cartago Centro, 250 metros norte de Almacenes el Rey " ,
        "EMPRESA_TELEFONO":"2550 4613" ,
        "EMPRESA_CELULAR":"8745 2218" ,
        "EMPRESA_DESCRIPCION":"Aplicacion para reservar clases" ,
        "EMPRESA_LATITUD":"10 10 10" ,
        "EMPRESA_LONGITUD":"20 20 20" ,
        "EMPRESA_OTROS":"¿Estás buscando en donde entrenar de forma segura? Nosotros tenemos la solución." ,
        "EMPRESA_FOTO_FONDO":".//fotos/principal.jpg",
        "EMPRESA_LOGO":"..//fotos/logo.jpg" 
    }
]

list_anuncios=[
    {
        
        "ANUNCIO_NOMBRE" :"inicio de Yoga",
        "ANUNCIO_DESCRIPCION" :"gran apertura de yoga, primera clase gratis, costo por clase 5000 colones",
        "ANUNCIO_FOTO_FONDO": "..//fotos/anuncio_yoga.jpg",
        "EMPRESA_ID" : 1
      
    },
    {
        
        "ANUNCIO_NOMBRE" :"inicio de Spinning",
        "ANUNCIO_DESCRIPCION" :" primera clase gratis, costo por clase 4000 colones",
        "ANUNCIO_FOTO_FONDO": "..//fotos/anuncio_spinning.jpg",
        "EMPRESA_ID" : 1
      
    }

]

list_actividades=[
    {
       
        "ACTIVIDAD_NOMBRE":"kempo",
        "ACTIVIDAD_ENTRENADOR":"mr Popo",
        "ACTIVIDAD_LUGAR" : "templo sagrada kamizama",
        "ACTIVIDAD_PRECIO" :0,
        "ACTIVIDAD_ESPACIOS" :10,
        "ACTIVIDAD_ESPACIOS_DISPONIBLES" : 10,
        "ACTIVIDAD_DESCRIPCION" :"conozca las ultimas tecnicas sagradas de kami",
        "ACTIVIDAD_ESTADO" :"Activo",
        "ACTIVIDAD_DIA_SEMANA" :"Lunes",
        "ACTIVIDAD_FECHA_INICIO" : "2021-05-03",
        "ACTIVIDAD_HORA_INICIO" :"20:00",
        "ACTIVIDAD_DURACION" :60,
        "ACTIVIDAD_FOTO" :"..//fotos/actividad_kempo.jpg",
        "EMPRESA_ID" :1
    },
  
    {
       
        "ACTIVIDAD_NOMBRE":"yoga",
        "ACTIVIDAD_ENTRENADOR":"sadguru",
        "ACTIVIDAD_LUGAR" : "sabana",
        "ACTIVIDAD_PRECIO" :5000,
        "ACTIVIDAD_ESPACIOS" :10,
        "ACTIVIDAD_ESPACIOS_DISPONIBLES" : 10,
        "ACTIVIDAD_DESCRIPCION" :"conozca las ultimas tecnicas meditacion",
        "ACTIVIDAD_ESTADO" :"Activo",
        "ACTIVIDAD_DIA_SEMANA" :"Lunes",
        "ACTIVIDAD_FECHA_INICIO" : "2021-05-03",
        "ACTIVIDAD_HORA_INICIO" :"19:00",
        "ACTIVIDAD_DURACION" :60,
        "ACTIVIDAD_FOTO" :"..//fotos/actividad_yoga.jpg",
        "EMPRESA_ID" :1
    },

     {
       
        "ACTIVIDAD_NOMBRE":"Crossfit",
        "ACTIVIDAD_ENTRENADOR":"Arnold S",
        "ACTIVIDAD_LUGAR" : "Salon principal",
        "ACTIVIDAD_PRECIO" :7000,
        "ACTIVIDAD_ESPACIOS" :10,
        "ACTIVIDAD_ESPACIOS_DISPONIBLES" : 10,
        "ACTIVIDAD_DESCRIPCION" :" entrenamiento constantemente variado de movimientos funcionales",
        "ACTIVIDAD_ESTADO" :"Activo",
        "ACTIVIDAD_DIA_SEMANA" :"Martes",
        "ACTIVIDAD_FECHA_INICIO" : "2021-05-04",
        "ACTIVIDAD_HORA_INICIO" :"13:00",
        "ACTIVIDAD_DURACION" :90,
        "ACTIVIDAD_FOTO" :"..//fotos/actividad_Crossfit.jpg",
        "EMPRESA_ID" :1
    },

    {
       
        "ACTIVIDAD_NOMBRE":"Cardio Dance",
        "ACTIVIDAD_ENTRENADOR":"Fabian C. ",
        "ACTIVIDAD_LUGAR" : "Parque Central",
        "ACTIVIDAD_PRECIO" :5000,
        "ACTIVIDAD_ESPACIOS" :15,
        "ACTIVIDAD_ESPACIOS_DISPONIBLES" : 15,
        "ACTIVIDAD_DESCRIPCION" :"aprende sobre la fusión de la danza con las actividades físicas aeróbicas",
        "ACTIVIDAD_ESTADO" :"Activo",
        "ACTIVIDAD_DIA_SEMANA" :"Sabado",
        "ACTIVIDAD_FECHA_INICIO" : "2021-05-22",
        "ACTIVIDAD_HORA_INICIO" :"15:00",
        "ACTIVIDAD_DURACION" :60,
        "ACTIVIDAD_FOTO" :"..//fotos/actividad_CardioDance.jpg",
        "EMPRESA_ID" :1
    },

    {
       
        "ACTIVIDAD_NOMBRE":"Pilates",
        "ACTIVIDAD_ENTRENADOR":"Francella V. ",
        "ACTIVIDAD_LUGAR" : "Salon Principal",
        "ACTIVIDAD_PRECIO" :6000,
        "ACTIVIDAD_ESPACIOS" :20,
        "ACTIVIDAD_ESPACIOS_DISPONIBLES" : 20,
        "ACTIVIDAD_DESCRIPCION" :" movimiento físico diseñado para estirar, fortalecer y equilibrar el cuerpo",
        "ACTIVIDAD_ESTADO" :"Activo",
        "ACTIVIDAD_DIA_SEMANA" :"Lunes",
        "ACTIVIDAD_FECHA_INICIO" : "2021-05-24",
        "ACTIVIDAD_HORA_INICIO" :"17:00",
        "ACTIVIDAD_DURACION" :90,
        "ACTIVIDAD_FOTO" :"..//fotos/actividad_Pilates.jpg",
        "EMPRESA_ID" :1
    },

     {
       
        "ACTIVIDAD_NOMBRE":"Zumba",
        "ACTIVIDAD_ENTRENADOR":"Beto Perez ",
        "ACTIVIDAD_LUGAR" : "Parque de la Paz",
        "ACTIVIDAD_PRECIO" :8000,
        "ACTIVIDAD_ESPACIOS" :25,
        "ACTIVIDAD_ESPACIOS_DISPONIBLES" : 25,
        "ACTIVIDAD_DESCRIPCION" :"quema calorias al ritmo de la musica",
        "ACTIVIDAD_ESTADO" :"Activo",
        "ACTIVIDAD_DIA_SEMANA" :"Miercoles",
        "ACTIVIDAD_FECHA_INICIO" : "2021-05-26",
        "ACTIVIDAD_HORA_INICIO" :"13:00",
        "ACTIVIDAD_DURACION" :120,
        "ACTIVIDAD_FOTO" :"..//fotos/actividad_Zumba.jpg",
        "EMPRESA_ID" :1
    },

     {
       
        "ACTIVIDAD_NOMBRE":"Taebo",
        "ACTIVIDAD_ENTRENADOR":"Billie B. ",
        "ACTIVIDAD_LUGAR" : "Salon Principal",
        "ACTIVIDAD_PRECIO" :9000,
        "ACTIVIDAD_ESPACIOS" :15,
        "ACTIVIDAD_ESPACIOS_DISPONIBLES" : 15,
        "ACTIVIDAD_DESCRIPCION" :"disfruta una mezcla de boxeo con tae-kwon-do  al ritmo de la música",
        "ACTIVIDAD_ESTADO" :"Activo",
        "ACTIVIDAD_DIA_SEMANA" :"Jueves",
        "ACTIVIDAD_FECHA_INICIO" : "2021-05-27",
        "ACTIVIDAD_HORA_INICIO" :"14:00",
        "ACTIVIDAD_DURACION" :60,
        "ACTIVIDAD_FOTO" :"..//fotos/actividad_Taebo.jpg",
        "EMPRESA_ID" :1
    },

    {
       
        "ACTIVIDAD_NOMBRE":"TRX",
        "ACTIVIDAD_ENTRENADOR":" Chris F. ",
        "ACTIVIDAD_LUGAR" : "Salon Principal",
        "ACTIVIDAD_PRECIO" :8000,
        "ACTIVIDAD_ESPACIOS" :25,
        "ACTIVIDAD_ESPACIOS_DISPONIBLES" : 25,
        "ACTIVIDAD_DESCRIPCION" :"Entrenamiento en suspensión que trabaja con la propia carga del cuerpo ",
        "ACTIVIDAD_ESTADO" :"Activo",
        "ACTIVIDAD_DIA_SEMANA" :"Viernes",
        "ACTIVIDAD_FECHA_INICIO" : "2021-05-28",
        "ACTIVIDAD_HORA_INICIO" :"16:00",
        "ACTIVIDAD_DURACION" :60,
        "ACTIVIDAD_FOTO" :"..//fotos/actividad_TRX.jpg",
        "EMPRESA_ID" :1
    },

     {
       
        "ACTIVIDAD_NOMBRE":"Karate",
        "ACTIVIDAD_ENTRENADOR":"Wang Shu",
        "ACTIVIDAD_LUGAR" : "Salon Principal",
        "ACTIVIDAD_PRECIO" :10000,
        "ACTIVIDAD_ESPACIOS" :25,
        "ACTIVIDAD_ESPACIOS_DISPONIBLES" : 25,
        "ACTIVIDAD_DESCRIPCION" :"arte marcial de autodefensa japonesa",
        "ACTIVIDAD_ESTADO" :"Activo",
        "ACTIVIDAD_DIA_SEMANA" :"Sabado",
        "ACTIVIDAD_FECHA_INICIO" : "2021-05-29",
        "ACTIVIDAD_HORA_INICIO" :"10:00",
        "ACTIVIDAD_DURACION" :80,
        "ACTIVIDAD_FOTO" :"..//fotos/actividad_Karate.jpg",
        "EMPRESA_ID" :1
    }


    

]