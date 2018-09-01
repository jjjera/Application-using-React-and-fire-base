import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const proConfig = {
  apiKey: "AIzaSyCERyzZq_L3fuNcBcUznSnENHIkerHTTCo",
  authDomain: "reactfirebase-228fd.firebaseapp.com",
  databaseURL: "https://reactfirebase-228fd.firebaseio.com",
  projectId: "reactfirebase-228fd",
  storageBucket: "reactfirebase-228fd.appspot.com",
  messagingSenderId: "208916795434"
};

const devConfig = {
  apiKey: "AIzaSyAijJyWFLvDZZZD3ddhi5Yxi6ltZ06jO5Y",
  authDomain: "reactfirebasefordevelopement.firebaseapp.com",
  databaseURL: "https://reactfirebasefordevelopement.firebaseio.com",
  projectId: "reactfirebasefordevelopement",
  storageBucket: "",
  messagingSenderId: "788976141354"
};

const config = process.env.NODE_ENV === "production" ? proConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };
