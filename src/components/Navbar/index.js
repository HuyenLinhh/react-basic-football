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
        <div className='dropdown'>
          <button className='dropbtn'>
            <FiAlignJustify />
          </button>
          <div className='dropdown-content'>
            <a href='https://www.wemakefootballers.com/#'>FIND AN ACADEMY </a>
            <a href='https://www.wemakefootballers.com/#'>
              WEEKLY FOOTBALL TRAINING
            </a>
            <a href='#'>HOLIDAY CAMPS </a>
            <a href='#'>ABOUT US</a>
            <a href='https://www.wemakefootballers.com/news/'>NEWS</a>
            <a href='https://www.kitlocker.com/wemakefootballers/players'>
              SHOP
            </a>
            <a href='https://franchisewmf.com' type='_blank'>
              FRANCHISING
            </a>
            <a href='https://www.wemakefootballers.com/contact-us/'>
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
