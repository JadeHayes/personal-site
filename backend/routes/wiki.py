import os

from flask import Blueprint

from atlassian import Confluence

wiki = Blueprint('wiki', __name__)

confluence = Confluence(
    url=os.getenv('CONFLUENCE_URL'),
    username=os.getenv('CONFLUENCE_USERNAME'),
    password=os.getenv('CONFLUENCE_PASSWORD'))


@wiki.route('/tools', methods=['GET'])
def get_tools_wiki():
    """ Call wiki page and return "Tools We Use" content body"""
    response = confluence.get_page_by_id(32891, expand='body.storage')
    return response.get("body").get("storage").get("value")


@wiki.route('/python', methods=['GET'])
def get_python_wiki():
    """ Call wiki page and return python style guide content body"""
    response = confluence.get_page_by_id(227180579, expand='body.storage')
    return response.get("body").get("storage").get("value")


@wiki.route('/build-pipeline', methods=['GET'])
def get_build_pipeline_wiki():
    """ Call wiki page and return build pipeline content body"""
    response = confluence.get_page_by_id(340263186, expand='body.storage')
    return response.get("body").get("storage").get("value")