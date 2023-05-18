// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa8CX_MD1mBkNp_4UCgTuv2Jr-2LspTqI",
  authDomain: "avenger-toys.firebaseapp.com",
  projectId: "avenger-toys",
  storageBucket: "avenger-toys.appspot.com",
  messagingSenderId: "608853874139",
  appId: "1:608853874139:web:ebdac962ff2be1cf5bc3fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;