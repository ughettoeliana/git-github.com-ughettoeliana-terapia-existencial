import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA1raZkQ88dL2u809tm_RI41FhfSUSMYbs",
  authDomain: "terapia-existencial.firebaseapp.com",
  projectId: "terapia-existencial",
  storageBucket: "terapia-existencial.appspot.com",
  messagingSenderId: "301241560792",
  appId: "1:301241560792:web:a96aac7322c982ab44f1ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
