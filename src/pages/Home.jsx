import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from "../components/Navbar";
import Slider from '../components/Slider';
import Category from '../components/Category';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Category />
        <Product />
        <Newsletter />
        <Footer/>
    </div>
  )
}

export default Home