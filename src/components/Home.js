import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for client-side navigation
import '../static/Home.css';

const Home = () => {
  return (
    <div className="homePage">
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
            <Link to="/Home/About">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Home/Services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/Home/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <img src="cargoBanner.png" alt='banner' className="img"/>
        <Link to='/Home/BookingPage'>
        <img src="getStarted.png" alt='banner' className="imgButton"/>
        </Link>
      </div>
    </div> 
  );
}

export default Home;

