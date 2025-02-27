import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/appointments" element={<h1>Appointments Page</h1>} />
          <Route path="/signup" element={<h1>Sign Up Page</h1>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
