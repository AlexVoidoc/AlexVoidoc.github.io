from flask import Flask
from markupsafe import escape
from flask import render_template


app = Flask(__name__, static_url_path='/static')


@app.route("/")
@app.route("/<name>/")
def hello_name(name=None):
    return render_template("home.html", name=name)
