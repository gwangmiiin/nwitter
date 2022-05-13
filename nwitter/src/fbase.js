import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlDk99o8_D6c127i4CLikr-c_6gEEHDJc",
  authDomain: "nwitter-f2f4c.firebaseapp.com",
  projectId: "nwitter-f2f4c",
  storageBucket: "nwitter-f2f4c.appspot.com",
  messagingSenderId: "448658915026",
  appId: "1:448658915026:web:c2e2dc868131c21fc7770b",
  measurementId: "G-VJS0B677M6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();