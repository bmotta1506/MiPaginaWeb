import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/cuenta')
def cuenta():
  return render_template('cuenta.html')

@app.route('/contactos')
def contactos():
  return render_template('contactos.html')

@app.route('/modelos')
def modelos():
  return render_template('modelos.html')

@app.route('/registrate')
def registrate():
  return render_template('registrate.html')

@app.route('/sucursales')
def sucursales():
  return render_template('sucursales.html')

@app.errorhandler(404)
def error404(e):
  return render_template('404.html'), 404

if __name__ == '__main__':
  app.run(debug=True)