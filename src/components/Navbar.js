import React from 'react';
import './Navbar.css'; // Make sure to have Navbar.css for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Speedster Bikes
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Bikes</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
