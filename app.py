# import necessary libraries
from models import create_classes
import os
from flask_cors import CORS
from pymongo import MongoClient
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

app.config['MONGO_CONNECT'] = False
CORS(app)
client = MongoClient(os.getenv("MONGO_URI", "mongodb://localhost:27017/"))
db = client.flowers


# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html") 


# Query the database and send the jsonified results
@app.route("/search")
def form():
    return render_template("form.html")


@app.route("/plants")
def plants():
    data = []
    for flowers in db.flowers.find():
        data.append({
            "Common_Name": flowers["Common_Name"],
            "Scientific_Name": flowers["Scientific_Name"],
            "Family_Name": flowers["Family_Common_Name"],
            "Duration": flowers["Duration"],
            "Flower_Color": flowers["Flower_Color"],
            "Foliage_Color": flowers["Foliage_Color"],
            "Kind_of_Plant": flowers["Growth_Habit"],
            "Mature_Ht_ft": flowers["Height,_Mature_(feet)"],
            "Toxicity": flowers["Toxicity"],
            "Drought_Tolerance": flowers["Drought_Tolerance"],
            "Shade_Tolerance": flowers["Shade_Tolerance"],
            "Bloom_Period": flowers["Bloom_Period"],
            "Edible": flowers["Palatable_Human"],
        })
    return jsonify(data=data)

@app.route("/trends")
def trends():
    return render_template("trends.html")


if __name__ == "__main__":
    app.run()

# from flask_sqlalchemy import SQLAlchemy
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"

# # Remove tracking modifications
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

# # Pet = create_classes(db)
