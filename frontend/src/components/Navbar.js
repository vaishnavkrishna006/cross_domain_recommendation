import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">RecommendHub</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#explore" className="nav-link">Explore</a>
          <a href="#categories" className="nav-link">Categories</a>
          <a href="#features" className="nav-link">How It Works</a>
          <a href="#compare" className="nav-link">Compare</a>
        </div>

        <div className="navbar-right">
          <button className="btn-language">EN</button>
          <button className="btn-login">Login</button>
        </div>

        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
