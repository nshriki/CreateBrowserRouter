import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='nav-link'>Home</Link>
      <Link to="/about" className='nav-link'>About</Link>
      <Link to="/help" className='nav-link'>Help</Link>
    </nav>
  );
};

export default Navbar;
