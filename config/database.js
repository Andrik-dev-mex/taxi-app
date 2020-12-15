import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_URL,
  STORAGE_BUCKET,
  MENSSAGING_SENDER,
  APP_ID,
} from "@env"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_URL,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MENSSAGING_SENDER,
  appId: APP_ID,
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
