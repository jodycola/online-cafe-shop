import React from 'react';
import Announcements from './Announcements';
import Navbar from "./Navbar";
import Slider from './Slider';
import Location from './Location';
import Product from './Product';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Announcements />
        <Navbar />
        <Slider />
        <Location />
        <Product />
        <Contact />
        <Footer/>
    </div>
  )
}

export default Home