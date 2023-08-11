import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIAMPmB2BpmsmxggNc4Xdf11a2K50jvts",
  authDomain: "labarrica-85c2d.firebaseapp.com",
  projectId: "labarrica-85c2d",
  storageBucket: "labarrica-85c2d.appspot.com",
  messagingSenderId: "280957393916",
  appId: "1:280957393916:web:60d4b4d6ceabb22ad43079"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)