import pyrebase
from flask import Flask
import pickle
with open('model_pickle','rb') as f:
    mp=pickle.load(f)
from twilio.rest import Client

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
TWILIO_SID='AC3c56255301b4c916b769acb3204e053a'
TWILIO_TOKEN='0dad37e4acc7d937082cb5a602a24a22'

client=Client(TWILIO_SID,TWILIO_TOKEN)
# As an admin, the app has access to read and write all data, regradless of Security Rules
app = Flask(__name__)
# Route for seeing a data
@app.route('/data/alert')
def alert_patient():
	phone_numbers_ref = db.reference('Alert').get()['id']
	phone_numbers =db.reference('Users').child(phone_numbers_ref).get()['phoneNumber']
	TWILIO_PHONE='+13262667757'
	client.messages.create(
		from_= TWILIO_PHONE,
		to= '+91'+str(phone_numbers),
		body="Greetings of the day! This is to inform you that your quiz answers have been analyzed by our therapist. They will be contacting you shortly to discuss the next steps. Thank you for participating!\nRegards,\nThe TherapyPal team."
	)

	return "SMS Sent"

@app.route('/data')
def get_time():
	predicting_list=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
	ref = db.reference('Active').get()['id']
	final = db.reference('Users').child(ref).child('Answers').get()
	if final[0]==0:
		predicting_list[0][21]=1
	elif final[0]==1:
		predicting_list[0][23]=1
	else :
		predicting_list[0][22]=1
	if final[1]==0:
		predicting_list[0][16]=1
	elif final[1]==1:
		predicting_list[0][17]=1
	else :
		predicting_list[0][15]=1
	if final[2]==0:
		predicting_list[0][3]=1
	elif final[2]==1:
		predicting_list[0][5]=1
	else :
		predicting_list[0][4]=1
	if final[3]==0:
		predicting_list[0][0]=1
	elif final[3]==1:
		predicting_list[0][2]=1
	else :
		predicting_list[0][1]=1
	if final[4]==0:
		predicting_list[0][12]=1
	elif final[4]==1:
		predicting_list[0][14]=1
	else :
		predicting_list[0][13]=1
	if final[5]==0:
		predicting_list[0][9]=1
	elif final[5]==1:
		predicting_list[0][11]=1
	else :
		predicting_list[0][10]=1
	if final[6]==0:
		predicting_list[0][18]=1
	elif final[6]==1:
		predicting_list[0][20]=1
	else :
		predicting_list[0][19]=1
	if final[7]==0:
		predicting_list[0][6]=1
	elif final[7]==1:
		predicting_list[0][8]=1
	else :
		predicting_list[0][7]=1
	# Initializing flask app
	result = mp.predict(predicting_list)[0]

	return {
		'prediction': result
		}

if __name__ == '__main__':
	app.run(debug=True)
