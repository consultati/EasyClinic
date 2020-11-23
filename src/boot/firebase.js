// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCUgJi4twcDfzpqzjzq7ZSBLZsoDfK963Y",
  authDomain: "easy-clinic-7751c.firebaseapp.com",
  databaseURL: "https://easy-clinic-7751c.firebaseio.com",
  projectId: "easy-clinic-7751c",
  storageBucket: "easy-clinic-7751c.appspot.com",
  messagingSenderId: "963018072910",
  appId: "1:963018072910:web:a55f85daa7a2e3bfa7741f",
  measurementId: "G-QHX2P2CSTT"
}
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)

// Setup firebaseAuth
let firebaseAuth = firebaseApp.auth()

// Export firebaseAuth
export { firebaseAuth }
