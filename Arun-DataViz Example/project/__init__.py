"""
The flask application package.
"""


# import FlaskWebProject.apis

from flask import Flask
app = Flask(__name__)


def main():
    from . import views
    from . import apis


main()
