from flask import Blueprint, render_template

jira_blueprint = Blueprint('jira_blueprint', __name__, template_folder='../templates')

@jira_blueprint.route('/jira')
def jira():
    return render_template('jira.html')
