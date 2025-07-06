import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function  Navbar(){
    return(
        <>
            <nav className="navbar">
                <div className="navbar-brand">CarVilla</div>
                <ul className="navbar-links">
                    <li><Link to="/" className="nav-link active">Home</Link></li>
                    <li><Link to="#" className="nav-link">Features</Link></li>
                    <li><Link to="#" className="nav-link">Pricing</Link></li>
                    <li><Link to="#" className="nav-link">About</Link></li>
                    <li><Link to="#" className="nav-link">Contact</Link></li>
                    <li><Link to="/login" className="nav-link">Login/Signup</Link></li>
                </ul>
            </nav>
        </>
    );
}