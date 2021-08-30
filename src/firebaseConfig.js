import firebase from "firebase/app";
import { toast } from "./toast";
require("firebase/auth");

var firebaseConfig = {
  apiKey: "AIzaSyBpB1E5a3s7lY8QXZqlrkSuXNX37M7xfRo",
  authDomain: "krktbot.firebaseapp.com",
  projectId: "krktbot",
  storageBucket: "krktbot.appspot.com",
  messagingSenderId: "715594695679",
  appId: "1:715594695679:web:c3b6fd4c95cd899c9c9dca",
  measurementId: "G-3BMN8E0HN1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export async function loginUser(email, password) {


  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    toast(error.message);
    return false;
  }
}

export async function registerUser(email, password) {

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    toast(error.message);
    return false;
  }
}

export async function getCurrentUser() {
return new Promise((resolve, reject) => {
  const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
    if(user){
      resolve(user)
    }else{
      resolve(null)
    }
    unsubscribe()
  })
})
}

export async function signOut() {
  firebase.auth().signOut();
}
