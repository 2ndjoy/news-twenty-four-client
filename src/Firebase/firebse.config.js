// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDJEDmofB-cyWyOyGlSPAdaVA_OoN30RI",
    authDomain: "news-24n7.firebaseapp.com",
    projectId: "news-24n7",
    storageBucket: "news-24n7.appspot.com",
    messagingSenderId: "1008422979640",
    appId: "1:1008422979640:web:aae7ad6efcda3e4fd93ecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;