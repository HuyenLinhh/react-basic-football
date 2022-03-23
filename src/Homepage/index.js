import React, { Component } from 'react';
import { Banner } from '../components/Banner';
import Navbar from '../components/Navbar';

const line_1 = '....'

function Homepage() {
    return (
        <div>
            <Navbar />
            <Banner />
        </div >
    );
}
export default Homepage;