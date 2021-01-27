import os
from flask_cors import CORS
from flask import Flask, render_template, redirect, jsonify
from pymongo import MongoClient
app = Flask(__name__)
app.config['MONGO_CONNECT'] = False
CORS(app)
client = MongoClient(os.getenv("MONGO_URI", "mongodb://localhost:27017/"))
db = client.flowers


print(list(db.info.find()))

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/form")
def plants():
    data = []
    for plant in db.info.find():
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


if __name__ == "__main__":
    app.run(debug=True)
