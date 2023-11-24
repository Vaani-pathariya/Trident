// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase} from 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "7SpcMCZj3LTeDssZvsC8mnIoI7j1",
  authDomain: "trident-a4b03.firebaseapp.com",
  databaseURL: "https://trident-a4b03-default-rtdb.firebaseio.com",
  projectId: "trident-a4b03",
  storageBucket: "trident-a4b03.appspot.com",
  messagingSenderId: "475444774637",
  appId: "1:475444774637:web:f2b6110536ffbf1faf2ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db_connecting=getDatabase(app);