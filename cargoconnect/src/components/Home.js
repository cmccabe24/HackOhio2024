import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for client-side navigation
import '../static/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Logo at the top */}
      <div className="logo-container">
        <img src="/cargoLogo.png" alt="Logo" className="logo" />
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <img src="cargoBanner.png" alt='banner'/>
    </div>
    </div>
    
  );
}

export default Home;

