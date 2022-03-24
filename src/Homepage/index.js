import React, { Component } from 'react';
import { Banner } from '../components/Banner';
import Navbar from '../components/Navbar';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line_1: 'We make footballers isleworth',
      line_2: 'Football training for kids',
      line_3: 'At the Green School, London Rd, Bush Corner, Isleworth TW7 5BB',

    }
  }
  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Navbar />
        <Banner banner1={this.state.line_1} banner2={this.state.line_2} banner3={this.state.line_3} />
      </div >
    );
  }
}
export default Homepage;
