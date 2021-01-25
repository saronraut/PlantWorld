import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///species.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
flower = Base.classes.flowering

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/names<br/>"
        f"/api/v1.0/flowers"
    )


@app.route("/api/v1.0/names")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    results = session.query(flower.Common_Name).all()

    session.close()

    # Convert list of tuples into normal list
    all_names = list(np.ravel(results))

    return jsonify(all_names)


@app.route("/api/v1.0/form")
def flowersearch():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of passenger data including the name, age, and sex of each passenger"""
    # Query all flowers
    results = session.query(flower.Common_Name, flower.Scientific_Name, flower.Flower_Color).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    flowers = []
    for Common_Name, Scientific_Name, Flower_Color in results:
        flower_dict = {}
        flower_dict["Common_Name"] = Common_Name
        flower_dict["Scientific_Name"] = Scientific_Name
        flower_dict["Flower_Color"] = Flower_Color
        flowers.append(flower_dict)

    return jsonify(all_flowers)


if __name__ == '__main__':
    app.run(debug=True)
