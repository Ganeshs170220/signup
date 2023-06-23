import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Router>
    <Routes> 
      <Route path="/" element={<App />} />
      <Route path="/loginform" element={<LoginForm />} />
      <Route path="/signupform" element={<SignupForm />} />
    </Routes>
  </Router>
);


