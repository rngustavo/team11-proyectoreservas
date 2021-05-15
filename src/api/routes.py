"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Usuarios, Empresa, Empresa_Anuncios, Actividades, Actividades_Participantes
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity, create_access_token 
from api.dataload import list_usuarios,list_empresa,list_anuncios,list_actividades
import random

api = Blueprint('api', __name__)




@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

#hace una carga inicial de la base de datos
@api.route('/load', methods=['GET'])
def load_data():
    for usuario in list_usuarios:
        new_usuario=Usuarios()
        new_usuario.USUARIO_EMAIL=usuario["USUARIO_EMAIL"]
        new_usuario.USUARIO_PASSWORD=usuario["USUARIO_PASSWORD"]
        new_usuario.USUARIO_IS_ACTIVE=True
        db.session.add(new_usuario)
        db.session.commit()
   
    for cia in list_empresa:
        new_empresa=Empresa()
        new_empresa.EMPRESA_NOMBRE=cia["EMPRESA_NOMBRE"]
        new_empresa.EMPRESA_UBICACION=cia["EMPRESA_UBICACION"]
        new_empresa.EMPRESA_TELEFONO=cia["EMPRESA_TELEFONO"]
        new_empresa.EMPRESA_CELULAR=cia["EMPRESA_CELULAR"]
        new_empresa.EMPRESA_DESCRIPCION=cia["EMPRESA_DESCRIPCION"]
        new_empresa.EMPRESA_LATITUD=cia["EMPRESA_LATITUD"]
        new_empresa.EMPRESA_LONGITUD=cia["EMPRESA_LONGITUD"]
        new_empresa.EMPRESA_OTROS=cia["EMPRESA_OTROS"]
        new_empresa.EMPRESA_FOTO_FONDO=cia["EMPRESA_FOTO_FONDO"]
        new_empresa.EMPRESA_LOGO=cia["EMPRESA_LOGO"]
        db.session.add(new_empresa)
        db.session.commit()

    for anuncio in list_anuncios:
        new_anuncio=Empresa_Anuncios()
        new_anuncio.ANUNCIO_NOMBRE=anuncio["ANUNCIO_NOMBRE"]
        new_anuncio.ANUNCIO_DESCRIPCION=anuncio["ANUNCIO_DESCRIPCION"]
        new_anuncio.ANUNCIO_FOTO_FONDO=anuncio["ANUNCIO_FOTO_FONDO"]
        new_anuncio.EMPRESA_ID=anuncio["EMPRESA_ID"]
        db.session.add(new_anuncio)
        db.session.commit()
        
    for actividad in list_actividades:
        new_actividad=Actividades()
        new_actividad.ACTIVIDAD_NOMBRE=actividad["ACTIVIDAD_NOMBRE"]
        new_actividad.ACTIVIDAD_ENTRENADOR=actividad["ACTIVIDAD_ENTRENADOR"]
        new_actividad.ACTIVIDAD_LUGAR=actividad["ACTIVIDAD_LUGAR"]
        new_actividad.ACTIVIDAD_PRECIO=actividad["ACTIVIDAD_PRECIO"]
        new_actividad.ACTIVIDAD_ESPACIOS=actividad["ACTIVIDAD_ESPACIOS"]
        new_actividad.ACTIVIDAD_ESPACIOS_DISPONIBLES=actividad["ACTIVIDAD_ESPACIOS_DISPONIBLES"]
        new_actividad.ACTIVIDAD_DESCRIPCION=actividad["ACTIVIDAD_DESCRIPCION"]
        new_actividad.ACTIVIDAD_ESTADO=actividad["ACTIVIDAD_ESTADO"]
        new_actividad.ACTIVIDAD_DIA_SEMANA=actividad["ACTIVIDAD_DIA_SEMANA"]
        new_actividad.ACTIVIDAD_FECHA_INICIO=actividad["ACTIVIDAD_FECHA_INICIO"]
        new_actividad.ACTIVIDAD_HORA_INICIO=actividad["ACTIVIDAD_HORA_INICIO"]
        new_actividad.ACTIVIDAD_DURACION=actividad["ACTIVIDAD_DURACION"]
        new_actividad.ACTIVIDAD_FOTO=actividad["ACTIVIDAD_FOTO"] 
        new_actividad.EMPRESA_ID=actividad["EMPRESA_ID"]
        db.session.add(new_actividad)
        db.session.commit()

    response_body = {
        "msg": "loading... initial data to database...  "
    }
    return jsonify(response_body), 200

#genera un usuario
@api.route('/register', methods=['POST'])
def register_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
   # print('email', email)
   # print('pass', password)
    # valida si estan vacios los ingresos
    if not email:
        return jsonify({"msg": "No email was provided"}), 400
    if not password:
        return jsonify({"msg": "No password was provided"}), 400
    
    # busca usuario en BBDD
    user = Usuarios.query.filter_by(USUARIO_EMAIL=email).first()
    if user:
        # the user was not found on the database
        return jsonify({"msg": "User already exists"}), 401
    else:
        # crea usuario nuevo
        new_user=Usuarios()
        new_user.USUARIO_EMAIL=email
        new_user.USUARIO_PASSWORD=password  
        new_user.USUARIO_IS_ACTIVE=True     
        # crea registro nuevo en BBDD de 
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "User created successfully"}), 200

#devuelve el token de un usuario registrado  
@api.route('/login', methods=['POST']) 
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # valida si estan vacios los ingresos
    if not email:
        return jsonify({"msg": "No email was provided"}), 400
    if not password:
        return jsonify({"msg": "No password was provided"}), 400

    
    # busca usuario en BBDD
    
    user = Usuarios.query.filter_by(USUARIO_EMAIL=email, USUARIO_PASSWORD=password).first()
    if not user:
        return jsonify({"msg": "Invalid username or password"}), 401
    else:
        # crear token
        my_token = create_access_token(identity=user.USUARIO_ID)
        return jsonify({"token": my_token}), 200




#retorna las clases
@api.route('/clases', methods=['GET'])
def clases():    
    all_clases = Actividades.query.order_by(Actividades.ACTIVIDAD_NOMBRE).all() 
    all_clases = list(map(lambda x: x.serialize(), all_clases))
    return jsonify({"results":all_clases, "message":"Class's List"}), 200


#retorna una clase  determinada
@api.route('/clases/<id>', methods=['GET'])
def getclases(id):    
    clase = Actividades.query.get(id) 
    if not clase:
        return jsonify({"msg": "Not found class"}), 404
    else:    
        clase=clase.serialize()   
        return jsonify(clase), 200


""" 

@api.route('/clases', methods=['POST'])
@jwt_required()
def add_clases():   
    #ID = request.json.get("favorite_id", None) 
    NOMBRE =request.json.get("NOMBRE", None) 
    ENTRENADOR =request.json.get("ENTRENADOR", None) 
    LUGAR = request.json.get("LUGAR", None) 
    PRECIO = request.json.get("PRECIO", None) 
    ESPACIOS = request.json.get("ESPACIOS", None) 
    #al crear la capacidad es la misma que los disponibles
    ESPACIOS_DISPONIBLES = request.json.get("ESPACIOS", None) 
    #ESPACIOS_DISPONIBLES = request.json.get("ESPACIOS_DISPONIBLES", None) 
    DESCRIPCION = request.json.get("DESCRIPCION", None) 
    ESTADO = request.json.get("ESTADO", None) 
    DIA_SEMANA = request.json.get("DIA_SEMANA", None) 
    FECHA_INICIO = request.json.get("FECHA_INICIO", None) 
    HORA_INICIO =request.json.get("HORA_INICIO", None) 
    DURACION = request.json.get("DURACION", None) 
    FOTO = request.json.get("FOTO", None) 
    EMPRESA_ID = request.json.get("EMPRESA_ID", None) 

    # valida si estan vacios los ingresos
    if NOMBRE is None:
        return jsonify({"msg": "No NOMBRE was provided"}), 400
    if ENTRENADOR is None:
        return jsonify({"msg": "No ENTRENADOR was provided"}), 400
    if LUGAR is None:
        return jsonify({"msg": "No LUGAR was provided"}), 400
    if PRECIO is None:
        return jsonify({"msg": "No PRECIO was provided"}), 400
    if ESPACIOS is None:
        return jsonify({"msg": "No ESPACIOS was provided"}), 400
    if DESCRIPCION is None:
        return jsonify({"msg": "No DESCRIPCION was provided"}), 400
    if ESTADO is None:
        return jsonify({"msg": "No ESTADO was provided"}), 400
    if DIA_SEMANA is None:
        return jsonify({"msg": "No DIA_SEMANA was provided"}), 400
    if FECHA_INICIO is None:
        return jsonify({"msg": "No FECHA_INICIO was provided"}), 400
    if HORA_INICIO is None:
        return jsonify({"msg": "No HORA_INICIO was provided"}), 400
    if DURACION is None:
        return jsonify({"msg": "No DURACION was provided"}), 400    
    if FOTO:
        return jsonify({"msg": "No FOTO was provided"}), 400
    if EMPRESA_ID is None:
        return jsonify({"msg": "No EMPRESA_ID was provided"}), 400 
     
    # busca la identidad del token
    current_id = get_jwt_identity()
    # busca usuario en base de datos
    user = Usuarios.query.get(current_id)
   # print(user.id)
    if not user:
        # the user was not found on the database
        return jsonify({"msg": "Invalid Token"}), 400
    else:       
        new_clase=Actividades()       
        new_clase.ACTIVIDAD_NOMBRE = NOMBRE
        new_clase.ACTIVIDAD_ENTRENADOR =ENTRENADOR
        new_clase.ACTIVIDAD_LUGAR = LUGAR
        new_clase.ACTIVIDAD_PRECIO = PRECIO
        new_clase.ACTIVIDAD_ESPACIOS = ESPACIOS
        new_clase.ACTIVIDAD_ESPACIOS_DISPONIBLES = ESPACIOS_DISPONIBLES
        new_clase.ACTIVIDAD_DESCRIPCION = DESCRIPCION
        new_clase.ACTIVIDAD_ESTADO = ESTADO
        new_clase.ACTIVIDAD_DIA_SEMANA = DIA_SEMANA
        new_clase.ACTIVIDAD_FECHA_INICIO = FECHA_INICIO
        new_clase.ACTIVIDAD_HORA_INICIO = HORA_INICIO
        new_clase.ACTIVIDAD_DURACION = DURACION
        new_clase.ACTIVIDAD_FOTO = FOTO 
        new_clase.EMPRESA_ID = EMPRESA_ID  
        db.session.add(new_clase)
        db.session.commit()
        return jsonify({"msg": "Class created successfully"}), 200
 """
 

@api.route('/clases', methods=['POST'])
def add_clases():   
    #ID = request.json.get("favorite_id", None) 
    NOMBRE =request.json.get("NOMBRE", None) 
    ENTRENADOR =request.json.get("ENTRENADOR", None) 
    LUGAR = request.json.get("LUGAR", None) 
    PRECIO = request.json.get("PRECIO", None) 
    ESPACIOS = request.json.get("ESPACIOS", None) 
    #al crear la capacidad es la misma que los disponibles
    ESPACIOS_DISPONIBLES = request.json.get("ESPACIOS", None) 
    #ESPACIOS_DISPONIBLES = request.json.get("ESPACIOS_DISPONIBLES", None) 
    DESCRIPCION = request.json.get("DESCRIPCION", None) 
    ESTADO = request.json.get("ESTADO", None) 
    DIA_SEMANA = request.json.get("DIA_SEMANA", None) 
    FECHA_INICIO = request.json.get("FECHA_INICIO", None) 
    HORA_INICIO =request.json.get("HORA_INICIO", None) 
    DURACION = request.json.get("DURACION", None) 
    FOTO = request.json.get("FOTO", None) 
    EMPRESA_ID = request.json.get("EMPRESA_ID", None) 

    # valida si estan vacios los ingresos
    if not NOMBRE:
        return jsonify({"msg": "No NOMBRE was provided"}), 400
    if not ENTRENADOR:
        return jsonify({"msg": "No ENTRENADOR was provided"}), 400
    if not LUGAR:
        return jsonify({"msg": "No LUGAR was provided"}), 400
    if PRECIO is None:
        return jsonify({"msg": "No PRECIO was provided"}), 400
    if not ESPACIOS:
        return jsonify({"msg": "No ESPACIOS was provided"}), 400
    if not DESCRIPCION:
        return jsonify({"msg": "No DESCRIPCION was provided"}), 400
    if not ESTADO:
        return jsonify({"msg": "No ESTADO was provided"}), 400
    if not DIA_SEMANA:
        return jsonify({"msg": "No DIA_SEMANA was provided"}), 400
    if not FECHA_INICIO:
        return jsonify({"msg": "No FECHA_INICIO was provided"}), 400
    if not HORA_INICIO:
        return jsonify({"msg": "No HORA_INICIO was provided"}), 400
    if not DURACION:
        return jsonify({"msg": "No DURACION was provided"}), 400    
    if not FOTO:
        return jsonify({"msg": "No FOTO was provided"}), 400
    if not EMPRESA_ID:
        return jsonify({"msg": "No EMPRESA_ID was provided"}), 400 
      
    new_clase=Actividades()       
    new_clase.ACTIVIDAD_NOMBRE = NOMBRE
    new_clase.ACTIVIDAD_ENTRENADOR =ENTRENADOR
    new_clase.ACTIVIDAD_LUGAR = LUGAR
    new_clase.ACTIVIDAD_PRECIO = PRECIO
    new_clase.ACTIVIDAD_ESPACIOS = ESPACIOS
    new_clase.ACTIVIDAD_ESPACIOS_DISPONIBLES = ESPACIOS_DISPONIBLES
    new_clase.ACTIVIDAD_DESCRIPCION = DESCRIPCION
    new_clase.ACTIVIDAD_ESTADO = ESTADO
    new_clase.ACTIVIDAD_DIA_SEMANA = DIA_SEMANA
    new_clase.ACTIVIDAD_FECHA_INICIO = FECHA_INICIO
    new_clase.ACTIVIDAD_HORA_INICIO = HORA_INICIO
    new_clase.ACTIVIDAD_DURACION = DURACION
    new_clase.ACTIVIDAD_FOTO = FOTO 
    new_clase.EMPRESA_ID = EMPRESA_ID  
    db.session.add(new_clase)
    db.session.commit()
    return jsonify({"msg": "Class created successfully"}), 200

#retorna una empresa determinada
@api.route('/empresa/<id>', methods=['GET'])
def getempresa(id):    
    empresa = Empresa.query.get(id) 
    empresa = empresa.serialize()   
    return jsonify({"result": empresa}), 200


@api.route("/forgot", methods=["POST"])
def send_password():
    email = request.json.get("email", None)    
    
    if not email:
        return jsonify({"msg": "No email was provided"}), 400
    
    Email =  Usuarios.query.filter_by(USUARIO_EMAIL=email).first()
    
    if Email:
        clave="Kalendarfit"+str(random.randrange(1, 250))
        Email.USUARIO_PASSWORD=clave
        db.session.commit() 

        return jsonify(clave), 200        
       
    else:   
        return jsonify({"msg": "Not found Email"}), 404       
 
 

@api.route("/reset", methods=["POST"])
def reset_password():
    email = request.json.get("email", None)
    password_temporal = request.json.get("password_temporal", None)
    nuevo_password = request.json.get("nuevo_password", None)    

    # valida si estan vacios los ingresos
    if not email:
        return jsonify({"msg": "No email was provided"}), 400
    if not password_temporal:
        return jsonify({"msg": "No Temporal password was provided"}), 400
    if not nuevo_password:
        return jsonify({"msg": "No New password was provided"}), 400

    user = Usuarios.query.filter_by(USUARIO_EMAIL=email, USUARIO_PASSWORD=password_temporal).first()
    if not user:
        return jsonify({"msg": "Invalid username or password"}), 401
    else:
        user.USUARIO_PASSWORD=nuevo_password
        db.session.commit()
        return jsonify({"msg": "Password change successfully"}), 200


#retorna total de clases reservadas
@api.route('/clasesreservadas', methods=['GET'])
@jwt_required()
def getclasesreservadas(): 
    clases_usuario = []
    infoclases = []
    current_id = get_jwt_identity()
    clases_usuario = Actividades_Participantes.query.filter_by(PERSONA_ID=current_id)
    clasesreservadas = list(map(lambda x: x.serialize(), clases_usuario)) 
    for clasesporusuario in clasesreservadas:
        informacionactividad = Actividades.query.filter_by(ACTIVIDAD_ID=clasesporusuario['ACTIVIDAD'])
        item=list(map(lambda x: x.serialize(), informacionactividad))
        infoclases.append(item[0])
    return jsonify({"result":infoclases}), 200



#matricular la clase x en un usuario x
@api.route('/matricularclase/<id>', methods=['POST'])
@jwt_required()
def matricularclases(id):
    # busca la identidad del token
    current_id = get_jwt_identity()
    # busca usuario en base de datos
    user = Usuarios.query.get(current_id)
    print(user.USUARIO_ID)
    if not user:
        # the user was not found on the database
        return jsonify({"msg": "Invalid Token"}), 400
    else:        
        matricula= Actividades_Participantes()
        matricula.ACTIVIDAD_ID=id
        matricula.PERSONA_ID=user.USUARIO_ID       
        db.session.add(matricula)
        db.session.commit()
        actividad=Actividades.query.filter_by(ACTIVIDAD_ID=id).first()        
        if not actividad:
            return jsonify({"msg": "Actividad Not Found"}), 401
        else:
            actividad.ACTIVIDAD_ESPACIOS_DISPONIBLES-=1
            db.session.commit()
            return jsonify({"msg": "Matricula created successfully"}), 200


@api.route('/actualizarclase/<id>', methods=['PUT'])
def updateclass(id):
    NOMBRE =request.json.get("NOMBRE", None) 
    ENTRENADOR =request.json.get("ENTRENADOR", None) 
    LUGAR = request.json.get("LUGAR", None) 
    PRECIO = request.json.get("PRECIO", None) 
    ESPACIOS = request.json.get("ESPACIOS", None) 
    #al crear la capacidad es la misma que los disponibles
    ESPACIOS_DISPONIBLES = request.json.get("ESPACIOS", None) 
    #ESPACIOS_DISPONIBLES = request.json.get("ESPACIOS_DISPONIBLES", None) 
    DESCRIPCION = request.json.get("DESCRIPCION", None) 
    ESTADO = request.json.get("ESTADO", None) 
    DIA_SEMANA = request.json.get("DIA_SEMANA", None) 
    FECHA_INICIO = request.json.get("FECHA_INICIO", None) 
    HORA_INICIO =request.json.get("HORA_INICIO", None) 
    DURACION = request.json.get("DURACION", None) 
    FOTO = request.json.get("FOTO", None) 
    EMPRESA_ID = request.json.get("EMPRESA_ID", None) 

    if not NOMBRE:
        return jsonify({"msg": "No NOMBRE was provided"}), 400
    if not ENTRENADOR:
        return jsonify({"msg": "No ENTRENADOR was provided"}), 400
    if not LUGAR:
        return jsonify({"msg": "No LUGAR was provided"}), 400
    if PRECIO is None:
        return jsonify({"msg": "No PRECIO was provided"}), 400
    if not ESPACIOS:
        return jsonify({"msg": "No ESPACIOS was provided"}), 400
    if not DESCRIPCION:
        return jsonify({"msg": "No DESCRIPCION was provided"}), 400
    if not ESTADO:
        return jsonify({"msg": "No ESTADO was provided"}), 400
    if not DIA_SEMANA:
        return jsonify({"msg": "No DIA_SEMANA was provided"}), 400
    if not FECHA_INICIO:
        return jsonify({"msg": "No FECHA_INICIO was provided"}), 400
    if not HORA_INICIO:
        return jsonify({"msg": "No HORA_INICIO was provided"}), 400
    if not DURACION:
        return jsonify({"msg": "No DURACION was provided"}), 400    
    if not FOTO:
        return jsonify({"msg": "No FOTO was provided"}), 400
    if not EMPRESA_ID:
        return jsonify({"msg": "No EMPRESA_ID was provided"}), 400 

    clase =  Actividades.query.filter_by(ACTIVIDAD_ID=id).first()
    clase.ACTIVIDAD_NOMBRE=NOMBRE
    clase.ACTIVIDAD_ENTRENADOR=ENTRENADOR
    clase.ACTIVIDAD_LUGAR = LUGAR
    clase.ACTIVIDAD_PRECIO = PRECIO
    clase.ACTIVIDAD_ESPACIOS = ESPACIOS
    clase.ACTIVIDAD_ESPACIOS_DISPONIBLES = ESPACIOS_DISPONIBLES
    clase.ACTIVIDAD_DESCRIPCION = DESCRIPCION
    clase.ACTIVIDAD_ESTADO = ESTADO
    clase.ACTIVIDAD_DIA_SEMANA = DIA_SEMANA
    clase.ACTIVIDAD_FECHA_INICIO = FECHA_INICIO
    clase.ACTIVIDAD_HORA_INICIO = HORA_INICIO
    clase.ACTIVIDAD_DURACION = DURACION
    db.session.commit() 
    return jsonify("ok"), 200

@api.route('/eliminarclase/<id>', methods=['DELETE'])
def deleteclasscreate(id):
    clase =  Actividades.query.get(id)
    if clase is None:
      raise APIException('User not found', status_code=404)

    db.session.delete(clase)
    db.session.commit() 
    return jsonify("ok"), 200

@api.route('/clasereservada/<id>', methods=['DELETE', 'GET'])
@jwt_required()
def deletereservedclass(id):
    current_id = get_jwt_identity()
    clases_usuario = Actividades_Participantes.query.filter_by(PERSONA_ID=current_id, ACTIVIDAD_ID=id).first()
    db.session.delete(clases_usuario)
    db.session.commit()    
    return jsonify("successfully deleted"), 200


# ejemplo de test de token
@api.route("/protected", methods=['GET', 'POST'])
# protege ruta con esta funcion
@jwt_required()
def protected():
    # busca la identidad del token
    current_id = get_jwt_identity()
    # busca usuarios en base de datos
    user = Usuarios.query.get(current_id)
    print(user)
    return jsonify({"id": user.id, "email": user.email}), 200


