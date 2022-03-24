import React from 'react';
import { Contact } from './Contact';
import './style.css';
export const Banner = ({ banner1, banner2, banner3 }) => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <div id='line-1'> {banner1} </div>
                <div id='line-2'> {banner2}</div>
                <div id='line-3'> {banner3}</div>
            </div>
            <Contact />
        </div>

    );
}
