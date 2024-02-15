import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0TEZ66QkjSTFPlF8DU7PE6mpQ8lod9Cw",
  authDomain: "boiler-c38ea.firebaseapp.com",
  projectId: "boiler-c38ea",
  storageBucket: "boiler-c38ea.appspot.com",
  messagingSenderId: "64635967969",
  appId: "1:64635967969:web:fa2a7c66d57e66e2af5aa0",

  //   apiKey: import.meta.env.VITE_apiKey,
  //   authDomain: import.meta.env.VITE_authDomain,
  //   projectId: import.meta.env.VITE_projectId,
  //   storageBucket: import.meta.env.VITE_storageBucket,
  //   messagingSenderId: import.meta.env.VITE_messagingSenderId,
  //   appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
