import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'; // ✅ Import new home component

import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <div className="" />

                <div className="content-wrapper">
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} /> {/* ✅ Show landing page */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
