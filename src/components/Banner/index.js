import React from 'react';
import { Contact } from './Contact';
import './style.css';
export const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <div id='line-1'> We make footballers isleworth</div>
                <div id='line-2'> Football training for kids </div>
                <div id='line-3'> At the Green School, London Rd, Bush Corner, Isleworth TW7 5BB</div>
            </div>
            <Contact />
        </div>

    );
}
