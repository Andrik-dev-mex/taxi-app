import firebase from "firebase";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCbbokgOHTkr9UNG90VwaS-MGyHqdmAq0o",
  authDomain: "taxi-app-c1c9e.firebaseapp.com",
  projectId: "taxi-app-c1c9e",
  storageBucket: "taxi-app-c1c9e.appspot.com",
  messagingSenderId: "590101887264",
  appId: "1:590101887264:web:55c24812f79ce6efdd3f45",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default {
  firebase,
  db,
  auth,
  storage,
  googleProvider,
};
