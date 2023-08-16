import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW0MgDYGhJVzOeqCfT7GfGR6OzgEC_zfg",
  authDomain: "entregafinalreactjsrodrigojuan.firebaseapp.com",
  projectId: "entregafinalreactjsrodrigojuan",
  storageBucket: "entregafinalreactjsrodrigojuan.appspot.com",
  messagingSenderId: "787525932874",
  appId: "1:787525932874:web:61c7a076bd6f65fbeb13b3"
};

// Initialize Firebase
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
