import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDwlMdeRVdZDWYULDX9g8pM4KaGbkHXSh4",
  authDomain: "class-432f6.firebaseapp.com",
  databaseURL: "https://class-432f6-default-rtdb.firebaseio.com",
  projectId: "class-432f6",
  storageBucket: "class-432f6.appspot.com",
  messagingSenderId: "1083423936579",
  appId: "1:1083423936579:web:3075039833df75bbbe84f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database()