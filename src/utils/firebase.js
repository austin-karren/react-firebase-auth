import firebase from 'firebase/app';

const firebaseConfig = {
   // paste your firebase config from your firebase app here
   apiKey: "AIzaSyALt1NUtWZnRDJk4EojQGFc-nKarIkdsnk",
   authDomain: "fir-react-auth-edc0b.firebaseapp.com",
   databaseURL: "https://fir-react-auth-edc0b.firebaseio.com",
   projectId: "fir-react-auth-edc0b",
   storageBucket: "fir-react-auth-edc0b.appspot.com",
   messagingSenderId: "873509206498",
   appId: "1:873509206498:web:5d1fa16b91c9c915ad61bb",
   measurementId: "G-MG0H9W9GWD"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// for apps with server side rendering firebase may already be initialized so you need to check firebase for initialized apps

/*
   if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   } else {
      firebase.app();
   }
*/

// You can export firebase functions here to make life easier but this is optional

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signInWithGoogle = () => auth.signInWithRedirect(googleProvider); // another option is to use auth.signInWithPopup(provider).then().catch();

export const signInWithFacebook = () => auth.signInWithRedirect(facebookProvider);

export const createUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const sendPasswordResetEmail = (email) => auth.sendPasswordResetEmail(email);