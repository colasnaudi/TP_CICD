from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

# Connexion à MongoDB (le nom d'hôte correspond au service docker-compose)
client = MongoClient("mongodb://mongo:27017/")
db = client["testdb"]

@app.route("/")
def hello():
    # Test de connexion à la base
    count = db.test.count_documents({})
    return f"Hello, World! Documents in test collection: {count}"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)