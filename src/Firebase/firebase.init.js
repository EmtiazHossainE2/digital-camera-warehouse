
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrBs7aXtZC4mXJmaO58SpBDh5iFTb6B8w",
    authDomain: "digital-camera-warehouse.firebaseapp.com",
    projectId: "digital-camera-warehouse",
    storageBucket: "digital-camera-warehouse.appspot.com",
    messagingSenderId: "864553755242",
    appId: "1:864553755242:web:ba9a20a1fd9d7de941e013"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;