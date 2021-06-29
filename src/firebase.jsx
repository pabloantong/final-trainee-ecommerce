import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVWEWx1pAk6xH8f6QS1jtrHS6qojvwZNQ",
  authDomain: "sillasgamers-c7385.firebaseapp.com",
  projectId: "sillasgamers-c7385",
  storageBucket: "sillasgamers-c7385.appspot.com",
  messagingSenderId: "160673426446",
  appId: "1:160673426446:web:617b29d895e7291cfc605f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };