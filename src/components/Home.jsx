import React from 'react';
import Announcements from './Announcements';
import Navbar from "./Navbar";
import Slider from './Slider';
import Location from './Location';

const Home = () => {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Location/>
    </div>
  )
}

export default Home