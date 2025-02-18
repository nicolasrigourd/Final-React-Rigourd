import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvHgIFGeu5Puc_TpWFsYV94ZDu5bTPwjA",
  authDomain: "mitienda-b221b.firebaseapp.com",
  projectId: "mitienda-b221b",
  storageBucket: "mitienda-b221b.firebasestorage.app",
  messagingSenderId: "247002944224",
  appId: "1:247002944224:web:6d9c40b4439f229850b685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
