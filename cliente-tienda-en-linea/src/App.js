import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';

// Pages
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from './pages/ProductsPage';


function App() {
  return (
    <div >
      {/* jsx */}
      <h1>hola mundo desde react</h1>
    </div>
  );
}

export default App;
