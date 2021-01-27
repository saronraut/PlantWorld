import os
from flask_cors import CORS
from flask import Flask, render_template, redirect, jsonify
from pymongo import MongoClient
app = Flask(__name__)
app.config['MONGO_CONNECT'] = False
CORS(app)
client = MongoClient(os.getenv("MONGO_URI", "mongodb://localhost:27017/"))
db = client.vaccinfo


# print(list(db.info.find()))

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/vacs")
def vacs():
    data = []
    for vac in db.info.find():
        data.append({
            "country": vac["country"],
            "total_vacs": vac["total_vacs"],
            "daily_vacs": vac["daily_vacs"],
            "vacs_cap": vac["vacs_cap"],
            "date": vac["data"],
            "made_by": vac["made_by"],
            "source": vac["source"],
        })
    return jsonify(data=data)


if __name__ == "__main__":
    app.run(debug=True)
