// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4SEvNf6mktYJgL5iWPe5zxz0VLKx-vrg",
  authDomain: "miniblog-88abe.firebaseapp.com",
  projectId: "miniblog-88abe",
  storageBucket: "miniblog-88abe.appspot.com",
  messagingSenderId: "628656125670",
  appId: "1:628656125670:web:43e17407f5e9c69ae22d27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};