from flask import Flask
from markupsafe import escape
from flask import render_template


app = Flask(__name__, static_url_path='/static')


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/education")
def education():
    return render_template("education.html")

