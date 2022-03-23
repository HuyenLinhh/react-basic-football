import React from 'react';
import './style.css';
import { FiChevronLeft, FiAlignJustify } from 'react-icons/fi'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_left">
                <span className='turnback'><FiChevronLeft /> Back to WMF</span>
                <span className="emphasize"> Change Location</span>
            </div>
            <div className="logo">
                <p> We make</p>
                <span className="emphasize"> Footballers </span>
                <p>ISLEWorth Academy</p>
            </div>
            <div className="navbar_right">
                <div className="login">
                    <span className="emphasize"> Existing Customer: </span>
                    <span style={{ textDecoration: 'underline white solid' }}> Login here</span>
                </div>
                <a href='https://www.wemakefootballers.com/we-make-footballers-covid-19-policy/' target="_self">
                    <button id="covid_policy" type='button'> Covid Policy</button>
                </a>
                <div className='dropdown'>
                    <a className="btn-secondary dropdown-toggle" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "3em" }}> <FiAlignJustify />
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href='#' className="dropdown-item">FIND AN ACADEMY </a></li>
                        <li><a href='#'>WEEKLY FOOTBALL TRAINING</a></li>
                        <li><a href='#'>HOliDAY CAMPS </a></li>
                        <li><a href='#'>ABOUT US</a></li>
                        <li><a href='#'>NEWS</a></li>
                        <li><a href='#'>SHOP</a></li>
                        <li><a href='#'>FRANCHISING</a></li>
                        <li><a href='#'>CONTACT US</a></li>
                    </ul>
                </div>
            </div>
        </div >
    )

}

export default Navbar