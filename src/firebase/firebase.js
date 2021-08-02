import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDFgE0IG1t7qFstIMVy83wInlqNXz2LIHM",
    authDomain: "nomprojet-9f60f.firebaseapp.com",
    databaseURL: "https://nomprojet-9f60f-default-rtdb.firebaseio.com",
    projectId: "nomprojet-9f60f",
    storageBucket: "nomprojet-9f60f.appspot.com",
    messagingSenderId: "51552248970",
    appId: "1:51552248970:web:d079a1186bb9b9a6297973",
    measurementId: "G-QT9009Z172"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();