import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM1Gwv1D-AvdE2t2nXWLHo3E_0TSWLKh4",
  authDomain: "secretmessageclub.firebaseapp.com",
  projectId: "secretmessageclub",
  storageBucket: "secretmessageclub.appspot.com",
  messagingSenderId: "803122138738",
  appId: "1:803122138738:web:fcf07ddb364d803624fceb",
  measurementId: "G-2QC9KQETTN",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
