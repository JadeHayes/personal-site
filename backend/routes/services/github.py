import os

import requests
from flask import Blueprint, jsonify, request

github = Blueprint('github_blueprint', __name__)

github_token = os.getenv('GITHUB_ACCESS_TOKEN')
github_eng_team_id = os.getenv('GITHUB_ENG_TEAM_ID')

headers = {
    'Authorization': 'token %s' % github_token,
    'Accept': 'application/vnd.github.dazzler-preview+json'
}

@github.route('/github/invite_user', methods = ['POST'])
def invite_user():
    team_ids = []
    engineer = request.form['engineer']
    if engineer == 'on':
        team_ids = [github_eng_team_id]

    data = {
        'email': request.form['email'],
        'team_ids': team_ids
    }

    # https://developer.github.com/v3/orgs/members/#create-organization-invitation
    response = requests.post('https://api.github.com/orgs/cerebrotech/invitations',
                  data=data, headers=headers)
    success = response.status_code == 201
    return jsonify({ 'success': success })
