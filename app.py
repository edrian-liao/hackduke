import datetime
# from bson.objectid import ObjectId
from flask import Flask, render_template, request, url_for, redirect
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from urllib.parse import quote_plus

app = Flask(__name__)

username = quote_plus('new-user_31')
password = quote_plus('YfT8oCYOy8xpNItJ')

uri = f"mongodb+srv://{username}:{password}@hackduke.hasnibk.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(uri, server_api=ServerApi('1'))

db = client.pillbox
box_status = db.box_status
open_close_timestamps = db.open_close_timestamps
prescriptions = db.prescriptions


@app.route('/')
def index():
    box_status_data = box_status.find()
    open_close_data = open_close_timestamps.find()
    prescriptions_data = prescriptions.find()
    return render_template(
        'main.html',
        box_status_data=box_status_data,
        open_close_data=open_close_data,
        prescriptions_data=prescriptions_data
    )
