import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBhtLYV8KL4FEphER-2mVpmqyZADMCEwo8",
  authDomain: "testproject-95afc.firebaseapp.com",
  projectId: "testproject-95afc",
  storageBucket: "testproject-95afc.appspot.com",
  messagingSenderId: "1060780835295",
  appId: "1:1060780835295:web:95b8fa9c132083b28d046a",
  measurementId: "G-L1TX7N0KQ1"
};

export default firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
