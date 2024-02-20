from flask import Flask
from markupsafe import escape

app = Flask(__name__)

@app.route("/<name>")
def hello_name(name):
    return f"<p>Hello {escape(name)}</p>"
