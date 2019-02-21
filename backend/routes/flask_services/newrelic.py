from flask import Blueprint, render_template

newrelic_blueprint = Blueprint('newrelic_blueprint', __name__, template_folder='../templates')

@newrelic_blueprint.route('/newrelic')
def newrelic():
    return render_template('newrelic.html')
