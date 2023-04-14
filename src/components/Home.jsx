import React from 'react';
import Announcements from './Announcements';
import Navbar from "./Navbar";
import Slider from './Slider';
import Location from './Location';
import Product from './Product';

const Home = () => {
  return (
    <div>
        <Announcements />
        <Navbar />
        <Slider />
        <Location />
        <Product />
    </div>
  )
}

export default Home