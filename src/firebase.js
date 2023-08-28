import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCFrOoYEFixH-iexUnm38ygHTant8J1LBM",
  authDomain: "react-portfolio-a95a7.firebaseapp.com",
  projectId: "react-portfolio-a95a7",
  storageBucket: "react-portfolio-a95a7.appspot.com",
  messagingSenderId: "827617322961",
  appId: "1:827617322961:web:7db0ba8ebef4c4ebcee2f0"
};


export const app = initializeApp(firebaseConfig);

export const db= getFirestore()