import boto3
from botocore.exceptions import ClientError
from flask import Blueprint, abort, jsonify, render_template, request

from services import next_service

iam = boto3.resource('iam')
aws_blueprint = Blueprint('aws_blueprint', __name__, template_folder='../templates')

@aws_blueprint.route('/aws')
def aws():
    return render_template('aws.html')

@aws_blueprint.route('/aws/create_user', methods = ['POST'])
def create_user():
    username = request.form['username']
    user = iam.User(username)

    try:
        user.create()
        user.attach_policy(PolicyArn='arn:aws:iam::aws:policy/AdministratorAccess')
        access_keys = user.create_access_key_pair()
        return jsonify({
            'username': access_keys.user_name,
            'id': access_keys.id,
            'secret': access_keys.secret
        })
    except ClientError as e:
        return jsonify({ 'error': str(e) }), 400
