const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyBKXg5qcyOGcG8GcUiS08_22Qwfkbhd2PE",
  authDomain: "ipcreactproject.firebaseapp.com",
  databaseURL: "https://ipcreactproject-default-rtdb.firebaseio.com",
  projectId: "ipcreactproject",
  storageBucket: "ipcreactproject.appspot.com",
  messagingSenderId: "626917250462",
  appId: "1:626917250462:web:479601a42875852761b28f",
  measurementId: "G-3YSC6EZL4P"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const User = db.collection('users')
module.exports = Users;