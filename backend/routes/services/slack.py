import os
import urllib.parse

import requests
from flask import Blueprint, jsonify, render_template, request

slack = Blueprint('slack_blueprint', __name__)

slack_token = os.getenv('SLACK_ACCESS_TOKEN')

headers = {
    'Authorization': 'Bearer %s' % slack_token
}

channels = {
    'random': 'C024X22HZ',
    'sf-office': 'C3V6DM6PP',
    'nyc-office': 'C4LQVAJGK',
    'chi-office': 'C4B152PEG',
    'lon-office': 'C5P2A5QUR',
    'eng-general': 'C02562ZH9',
    'marketing': 'C04N50PQ9',
    'industry-news': 'C12KF27E0',
    'competitive-intel': 'C27349YLQ'
}


@slack.route('/slack/invite_user', methods = ['POST'])
def invite_user():
    data = {
        'email': request.form['email'],
        'channels': ','.join(request.form.getlist('channels'))
    }

    response = requests.post('https://slack.com/api/users.admin.invite',
                            headers=headers, data=data)
    success = response.json()['ok'] == True
    return jsonify({ 'success': success })
