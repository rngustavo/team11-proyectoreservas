"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Usuarios,Empresa, Empresa_Anuncios, Actividades, Actividades_Participantes
from api.utils import generate_sitemap, APIException
from api.dataload import list_usuarios,list_empresa,list_anuncios,list_actividades



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
