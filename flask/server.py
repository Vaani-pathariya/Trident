import pyrebase
from flask import Flask
import datetime
import pickle
import requests
with open('model_pickle','rb') as f:
    mp=pickle.load(f)

firebaseConfig = {
    "apiKey": "AIzaSyDzUQkXoDISGb5tv-w-xh7uxjf43d9zMNE",
    "authDomain": "trident-a4b03.firebaseapp.com",
    "databaseURL": "https://trident-a4b03-default-rtdb.firebaseio.com",
    "projectId": "trident-a4b03",
    "storageBucket": "trident-a4b03.appspot.com",
    "messagingSenderId": "475444774637",
    "appId": "1:475444774637:web:f2b6110536ffbf1faf2ee4"
  };
firebase = pyrebase.initialize_app(firebaseConfig);
write_db=firebase.database()
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Fetch the service account key JSON file contents
cred = credentials.Certificate('trident-a4b03-firebase-adminsdk-e756t-f9ceca776a.json')

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://trident-a4b03-default-rtdb.firebaseio.com/'
})

# As an admin, the app has access to read and write all data, regradless of Security Rules
ref = db.reference('names')
print(ref.get())
write_db.child("names").push({"name":"devanshi"})
x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():

	# Returning an api for showing in reactjs
	return {
		'Name':"geek",
		"Age":"22",
		"Date":x,
		"programming":"python"
		}

@app.route('/add_data')
def get_data():
	final_data=requests.request.get_json()
# Running app
if __name__ == '__main__':
	app.run(debug=True)
