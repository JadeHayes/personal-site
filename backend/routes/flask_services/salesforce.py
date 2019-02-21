from flask import Blueprint, render_template

from services import next_service

salesforce_blueprint = Blueprint('salesforce_blueprint', __name__, template_folder='../templates')

@salesforce_blueprint.route('/salesforce')
def salesforce():
    return render_template('salesforce.html')
