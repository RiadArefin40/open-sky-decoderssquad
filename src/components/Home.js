import React from 'react';
import Banner from './Banner';
import Gaschart from './Gaschart';
import Gaslevel from './Gaslevel';
import Location from './Location';
import Navbar from './Navbar';
import Temperature from './Temperature';

const Home = () => {
    return (
        <div>
      <Banner></Banner>
      <Temperature></Temperature>
      <Navbar></Navbar>
      <Location></Location>
      <Gaslevel></Gaslevel>
    
        </div>
    );
};

export default Home;