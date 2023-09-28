import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBRzkGPQwJ4QsIrT4m_IUJZGJqxOovKGuc",
  authDomain: "cuttt-url-shortener.firebaseapp.com",
  projectId: "cuttt-url-shortener",
  storageBucket: "cuttt-url-shortener.appspot.com",
  messagingSenderId: "238717368229",
  appId: "1:238717368229:web:27531eb47e4dbf6de91a4c",
  measurementId: "G-F1XZ7P8HTT"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
