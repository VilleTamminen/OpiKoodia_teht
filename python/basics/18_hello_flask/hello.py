#https://flask.palletsprojects.com/en/3.0.x/installation/
#pip install flask
#ensin installoidaan Flask (parempi tehdä komentokehotteessa)

#Flask ilman venv
#osoite C:\Software\Python\Scripts

#Flask kun on venv (virtual environment)
#py -3 -m venv .venv
#.venv\Scripts\activate
#osoite C:\GitHub\OpiKoodia_teht\python\basics\18_hello_flask\.venv\Scripts

#flask --pp hello run
#tällä komennolla suoritetaan koodi

from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "<p>Hello Flask</p>"

app.run("127.0.0.1",port=8080)

