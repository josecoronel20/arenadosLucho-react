// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1NeM41GGV-Jpi0FoySUg4WhchEZ9gyYM",
  authDomain: "arenados-lucho-react.firebaseapp.com",
  projectId: "arenados-lucho-react",
  storageBucket: "arenados-lucho-react.appspot.com",
  messagingSenderId: "662299520990",
  appId: "1:662299520990:web:c901693eb43b3e8697b74f",
  measurementId: "G-5Z7S9BQCCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
export default storage;
