import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Help.css'

const Help = () => {
  return (
    <div>
        <h1>Help Page</h1>
        <nav className='help-nav'>
            <Link to="faq" className='help-link'>FAQ</Link>
            <Link to="contactus" className='help-link'>Contact Us</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Help;
