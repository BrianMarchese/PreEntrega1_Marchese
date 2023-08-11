import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIAMPmB2BpmsmxggNc4Xdf11a2K50jvts",
  authDomain: "labarrica-85c2d.firebaseapp.com",
  projectId: "labarrica-85c2d",
  storageBucket: "labarrica-85c2d.appspot.com",
  messagingSenderId: "280957393916",
  appId: "1:280957393916:web:60d4b4d6ceabb22ad43079"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
