from flask import Blueprint, render_template

circleci_blueprint = Blueprint('circleci_blueprint', __name__, template_folder='../templates')

@circleci_blueprint.route('/circleci')
def circleci():
    return render_template('circleci.html')
