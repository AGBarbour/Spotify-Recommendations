import os
from keras.models import load_model

# import sqlalchemy
import requests
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template, request
# from flask_sqlalchemy import SQLAlchemy

from func import search, features_call, recommendation


app = Flask(__name__)


#################################################
# Database Setup
#################################################

# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///music.db"

# db = SQLAlchemy(app)


# class Features(db.Model):
#     __tablename__ = 'features'

#     id = db.Column(db.String(64), primary_key=True)
#     popularity = db.Column(db.Float)
#     danceability = db.Column(db.Float)
#     energy = db.Column(db.Float)
#     loudness = db.Column(db.Float)
#     speechiness = db.Column(db.Float)
#     duration_ms = db.Column(db.Float)
#     tempo = db.Column(db.Float)

#     def __repr__(self):
#         return '<Features %r>' % (self.name)


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("recommend.html")


# @app.route("/search/<song>")
# def searchRoute(song):
#     print(song)
#     # Fetch song name, artist name, and album via API call
#     # songInfo = search(song)
#     songInfo = search(song)
#     return jsonify(songInfo)


@app.route("/recommend1")
def recommend1():

    song = {'acousticness': 0.7349397590361446,
            'danceability': 0.4340770791075051,
            'energy': 0.276,
            'instrumentalness': 5.33e-06,
            'key': 0.36363636363636365,
            'liveness': 0.11735205616850553,
            'loudness': 0.7669367651731809,
            'mode': 1.0,
            'speechiness': 0.03219814241486067,
            'tempo': 0.39690065779997113,
            'valence': 0.0382}

    # 'id': '3oEHQmhvFLiE7ZYES0ulzv'
    # Load trained model
    model = load_model('DeepLearning_Training1.h5')
    print(model)
    print('---------------------------------------')
    # Use song features to make a model.predict
    # What kind of database setup is required?
    predict = model.predict(song)
    print(predict)
    print('---------------------------------------')

    # Make second api call to retrieve name/album/artist from predicted songs
    recommendations = recommendation([predict])

    # data = list of top 5 songs

    return jsonify(recommendations)


if __name__ == "__main__":
    app.run(debug=True)
recommend1()
