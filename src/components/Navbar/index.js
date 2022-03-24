import React from 'react';
import './style.css';
import { FiChevronLeft, FiAlignJustify } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_left'>
        <span className='turnback'>
          <FiChevronLeft /> Back to WMF
        </span>
        <span className='emphasize'> Change Location</span>
      </div>
      <div className='logo'>
        <p> We make</p>
        <span className='emphasize'> Footballers</span>
        <p>ISLEWorth Academy</p>
      </div>
      <div className='navbar_right'>
        <div className='login'>
          <span className='emphasize'> Existing Customer: </span>
          <span className='login-btn'>Login here</span>
        </div>
        <a
          href='https://www.wemakefootballers.com/we-make-footballers-covid-19-policy/'
          target='_self'
        >
          <button id='covid_policy' type='button'>
            Covid Policy
          </button>
        </a>
        <div class='dropdown'>
          <button class='dropbtn'>
            <FiAlignJustify />
          </button>
          <div class='dropdown-content'>
            <a href='#'>FIND AN ACADEMY </a>
            <a href='#'>WEEKLY FOOTBALL TRAINING</a>
            <a href='#'>HOliDAY CAMPS </a>
            <a href='#'>ABOUT US</a>
            <a href='#'>NEWS</a>
            <a href='#'>SHOP</a>
            <a href='#'>FRANCHISING</a>
            <a href='#'>CONTACT US</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
