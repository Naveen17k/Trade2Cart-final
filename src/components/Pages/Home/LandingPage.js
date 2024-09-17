import React from 'react';
import Banner from '../Home/Banner';
import Advertisement from '../Home/Advertisement';
import BestProducts from '../Home/BestProducts';
import About from './About';


const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Advertisement />
      <About/>
      <BestProducts />
    </div>
  );
};

export default LandingPage;
