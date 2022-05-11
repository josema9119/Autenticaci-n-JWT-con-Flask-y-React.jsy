"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

@api.route('/register', methods=['POST'])
def register_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        new_user = User(email = body_email, password = body_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"created": True}), 200
    else: 
        return jsonify({"created": False, "msg": "Missing info"}), 200

@api.route('/login', methods=['POST'])
def login_user():
    body_email= request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        login_user = User.query.filter_by(email=body_email).filter_by(password=body_password).first()
        if login_user: 
            access_token = create_access_token(identity=login_user.id)
            return jsonify({"access_token": access_token}), 200
