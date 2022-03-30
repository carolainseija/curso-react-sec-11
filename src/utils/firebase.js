// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA5xIilq1us9EyMjOasD5j-E4sNSVADZY",
  authDomain: "meals-30880.firebaseapp.com",
  projectId: "meals-30880",
  storageBucket: "meals-30880.appspot.com",
  messagingSenderId: "442662039070",
  appId: "1:442662039070:web:ab351115e6928c58c5480f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default (app, db);
