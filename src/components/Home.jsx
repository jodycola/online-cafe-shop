import React from 'react';
import Announcements from './Announcements';
import Navbar from "./Navbar";
import Slider from './Slider';

const Home = () => {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home