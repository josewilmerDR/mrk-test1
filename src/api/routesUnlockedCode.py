"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import re

from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import User, UnlockCode, AsignedCode
from api.db import db
from .models import TokenBlokedList

from sqlalchemy.sql.expression import func

# from api.likes import Like
from api.utils import generate_sitemap, APIException
from sqlalchemy.exc import SQLAlchemyError
from itsdangerous import URLSafeTimedSerializer

from api.extensions import jwt, bcrypt
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import jwt_required, get_jwt
from flask_jwt_extended import JWTManager

import ssl
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


# PARA OPERACIONES CON FECHAS Y HORAS.
from datetime import (
    date,
    time,
    datetime,
    timezone,
    timedelta,
)  # timedelta, es para hacer resta de horas.

# LIBRERIA PARA VALIDAR EMAIL, valida que el dominio exista y que tenga un formato valida de email.
from email_validator import validate_email, EmailNotValidError

# PARA MANEJAR LA ENCRIPTACIÓN DE LA INFORMACIÓN. ADICIONAL SE REQUIERE, FLASK, REQUEST, JSONIFY, SIN EMBARGO ESOS YA FUERON INSTALADOS ARRIBA.
from flask_jwt_extended import get_jwt
from flask_jwt_extended import JWTManager

# Configuración de Cloudinary
import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
    api_proxy="http://proxy.server:9999",
    secure=True,
)

routes_unlocked_code = Blueprint("routes_unlocked_code", __name__)

EMAIL = os.environ.get("EMAIL")
PASSWORD = os.environ.get("PASSWORD")


# Handle/serialize errors like a JSON object
@routes_unlocked_code.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


# Funcion de verificación de token:
def verificacionToken(identity):
    jti = identity["jti"]
    token = TokenBlokedList.query.filter_by(token=jti, is_blocked=True).first()

    if token:
        return True  # Token bloqueado
    else:
        return False  # Token no bloqueado


# Funcion para agregar codigos des desbloqueo por defecto en True
@routes_unlocked_code.route("/create-code", methods=["POST"])
@jwt_required()
def create_code():
    # Obtenemos el ID del usuario del token
    jwt_claims = get_jwt()
    user_id = jwt_claims["user_id"]

    # Obtenemos los datos del cuerpo de la solicitud
    body = request.get_json()

    # Si el cuerpo está vacío, lanzamos un error
    if not body:
        raise APIException(
            {"message": "Necesitas especificar el body"}, status_code=400
        )

    # Verificamos que todos los campos requeridos estén presentes
    for field in [
        "code",
    ]:
        if field not in body:
            raise APIException(
                {"message": f"Necesitas especificar {field}"}, status_code=400
            )

    # Extraemos los datos del cuerpo
    code = body["code"]

    # Creamos un nuevo objeto de seller y lo agregamos a la base de datos
    new_code = UnlockCode(
        code=code,
        is_active=True,
        user_id=user_id,
    )
    db.session.add(new_code)
    db.session.commit()

    # Devolvemos una respuesta JSON con un mensaje y un código de estado HTTP 201 (creado)
    return (
        jsonify(
            {
                "message": "Codigo creado correctamente",
                # "image_url": image_cloudinary_url,
            }
        ),
        201,
    )


# Ruta para cambiar el estado de un codigo
@routes_unlocked_code.route("/change-code-status/<int:code>", methods=["PUT"])
@jwt_required()
def change_code_status(code):
    # Obtenemos el ID del usuario del token
    jwt_claims = get_jwt()
    user_id = jwt_claims["user_id"]

    print(user_id)
    print(code)
    # Buscamos el código en la base de datos
    unlock_code = UnlockCode.query.filter_by(code=code).first()

    # imprimir = unlock_code
    print(unlock_code)

    # Verificamos si el código existe y si el usuario tiene permiso para cambiarlo
    if unlock_code and unlock_code.user_id == user_id:
        # Cambiamos el estado del código
        unlock_code.is_active = not unlock_code.is_active
        db.session.commit()
        return {
            "message": f"El estado del código {unlock_code.code} ha sido cambiado."
        }, 200
    else:
        return {"message": "Código no encontrado o usuario no autorizado."}, 404


# Ruta para obtener un código al azar con estado "true"
@routes_unlocked_code.route("/random-active-code", methods=["POST"])
@jwt_required()
def get_random_active_code():
    jwt_claims = get_jwt()
    user_id = jwt_claims["user_id"]

    # Buscamos un código aleatorio con estado "true" en la base de datos
    unlock_code = (
        UnlockCode.query.filter_by(is_active=True).order_by(func.random()).first()
    )

    print(unlock_code)
    # Verificamos si encontramos un código
    if unlock_code:
        # Creamos un nuevo AsignedCode
        asigned_code = AsignedCode(code=unlock_code.code, user_id=user_id)
        print(asigned_code)

        # Guardamos el nuevo AsignedCode en la base de datos
        db.session.add(asigned_code)
        db.session.commit()

        return {"code": unlock_code.code}, 200
    else:
        return {"message": "No hay códigos activos."}, 404
