# https://docs.quay.io/api/swagger/#!/team/inviteTeamMemberEmail # + engineering
import os
import urllib.parse

import requests
from flask import Blueprint, jsonify, render_template, request

quay_blueprint = Blueprint('quay_blueprint', __name__, template_folder='../templates')

quay_token = os.getenv('QUAY_ACCESS_TOKEN')

headers = {
    'Authorization': 'Bearer %s' % quay_token
}

@quay_blueprint.route('/quay')
def quay():
    return render_template('quay.html')

@quay_blueprint.route('/quay/invite_user', methods = ['POST'])
def invite_user():
    email = request.form['email']

    url = "https://quay.io/api/v1/organization/cerebrotech/team/Engineering/invite/%s" % \
        urllib.parse.quote_plus(email)

    response = requests.put(url, headers=headers)
    success = response.status_code == 200
    return jsonify({ 'success': success })
