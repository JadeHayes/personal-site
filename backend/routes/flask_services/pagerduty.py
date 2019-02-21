# https://v1.developer.pagerduty.com/documentation/rest/users/create
# https://v2.developer.pagerduty.com/v2/page/api-reference#!/Users/post_users

from flask import Blueprint, render_template

pagerduty_blueprint = Blueprint('pagerduty_blueprint', __name__, template_folder='../templates')

@pagerduty_blueprint.route('/pagerduty')
def pagerduty():
    return render_template('pagerduty.html')
