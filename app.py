from flask import Flask
from markupsafe import escape
from flask import render_template


app = Flask(__name__, static_url_path='/static')


@app.route("/about/")
def about():
    return render_template("about.html")


@app.route("/")
def home():
    return render_template("home.html")
