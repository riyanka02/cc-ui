import React from 'react';
import './navbar.css';
import logo from '../../assets/logo1.svg'; // Adjust the path to your saved file

const Navbar = () => {
  return (
    <div className="outer">
      <header>
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="CodeClouds Logo" />
            <h2>CodeClouds Examination Test</h2>
          </div>
          <p>
            Time Left: <span className="time">79:53</span>
          </p>
        </div>
      </header>
    </div>
  );
};

export default Navbar;