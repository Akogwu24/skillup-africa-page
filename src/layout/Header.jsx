import React from 'react';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';

const Header = () => {
  return (
    <div className='container my-10'>
      <NavBar />
      <Hero />
    </div>
  );
};

export default Header;
