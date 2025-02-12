// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('inside firebase config',import.meta.env.VITE_PASS)

// const firebaseConfig = {
//   apiKey: "AIzaSyCyZXvOi-IOXTe6AIaP0QIrtChXJtyvSCM",
//   authDomain: "dragon-naws-module-52.firebaseapp.com",
//   projectId: "dragon-naws-module-52",
//   storageBucket: "dragon-naws-module-52.firebasestorage.app",
//   messagingSenderId: "191318922817",
//   appId: "1:191318922817:web:7e97ce1df61ce841eb18c0"
// };

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN ,
  projectId:import.meta.env.VITE_PROJECTID ,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET ,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;