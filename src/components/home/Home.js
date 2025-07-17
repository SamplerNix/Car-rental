import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Home.css";

export default function Home() {
    const location = useLocation();
    const email = location.state?.email || 'Guest';

    return (
        <div>
        <div className="Home-background">
            <div className="Home-container">
                <h1>Get Your Desired Car at Reasonable Price</h1>
                <p>This is the home page for website</p>
                <p>Welcome, {email}</p>
            </div>
        </div>
        <h1>
            Services
        </h1>
        {/* card starts from here */}
        <div className='card-row'>
        <div className='card'>
        <p className="card-title">Largest dealership of Car</p>
        <p className="small-desc">
            We have the network that cannects a lot of people arround the world
        </p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
        </div>
        {/* second card */}
        <div className='card'>
        <p className="card-title">Largest dealership of Car</p>
        <p className="small-desc">
            We have the network that cannects a lot of people arround the world
        </p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
        </div>
        {/* third row */}
        <div className='card'>
        <p className="card-title">Largest dealership of Car</p>
        <p className="small-desc">
            We have the network that cannects a lot of people arround the world
        </p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
        </div>
        {/* fourth */}
        <div className='card'>
        <p className="card-title">Largest dealership of Car</p>
        <p className="small-desc">
            We have the network that cannects a lot of people arround the world
        </p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
        </div>
        </div>
        </div>
    );
}
