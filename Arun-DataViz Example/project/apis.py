"""
Routes and views for the api application.
"""

from datetime import datetime
from flask import render_template, jsonify
from . import app
import json
import requests
from .pgsql import getApiInfo


@app.route('/table')
def table():
    """Renders the contact page."""
    print("rendering table from python application")
    # get api info from database
    apikey, baseurl = getApiInfo()
    queryUrl = baseurl + "&collapse=monthly&api_key=" + apikey
    response = requests.get(queryUrl).json()
    return response


@app.route('/chart')
def chart():
    """Renders the contact page."""
    print("rendering chart from python application")
    # get api info from database
    apikey, baseurl = getApiInfo()
    queryUrl = baseurl + "&api_key=" + apikey
    response = requests.get(queryUrl).json()
    return response
