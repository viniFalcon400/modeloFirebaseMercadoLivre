import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {

    apiKey: "AIzaSyAODNlEbZ6HmLWC0yJlCikF3RnPVCEhLos",
    authDomain: "rm-firebase.firebaseapp.com",
    databaseURL: "https://rm-firebase.firebaseio.com",
    projectId: "rm-firebase",
    storageBucket: "rm-firebase.appspot.com",
    messagingSenderId: "365196515299",
    appId: "1:365196515299:web:8e5b06003e79fbd25472d6"
   
  
};

firebase.initializeApp(firebaseConfig);

export default firebase