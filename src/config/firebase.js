// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGHW6u-F-I_6-nrNuuBXmp0jnhRLo8gbk",
  authDomain: "achou-app-ff23f.firebaseapp.com",
  projectId: "achou-app-ff23f",
  storageBucket: "achou-app-ff23f.appspot.com",
  messagingSenderId: "627468037866",
  appId: "1:627468037866:web:ebf1d581e2beb3f857b193"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;