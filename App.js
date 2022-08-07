import Router from "./App/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Import the functions you need from the SDKs you need
import {
  initializeApp,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEqfZy45nHi7xnd5U5gpQAZLPhtGg8Rs",
  authDomain: "steamgs-29f9f.firebaseapp.com",
  databaseURL:
    "https://steamgs-29f9f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "steamgs-29f9f",
  storageBucket: "steamgs-29f9f.appspot.com",
  messagingSenderId: "669786937879",
  appId: "1:669786937879:web:917e76efd13a5f0d8f9a52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
  return <Router />;
}
