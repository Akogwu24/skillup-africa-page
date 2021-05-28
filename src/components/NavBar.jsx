import React from 'react';
import Logo from './utils/Logo';
import NavLinks from './utils/NavLinks';
import arrow from '../assets/icons/Arrow.svg';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center'>
      <Logo />
      <div className='flex justify-between items-center gap-24'>
        <NavLinks />
        <button className='nav-btn'>
          Apply Now <img src={arrow} alt='btn' />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
