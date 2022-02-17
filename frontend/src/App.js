import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import RegisterPage from './Pages/Register';
import LoginPage from './Pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  )
}