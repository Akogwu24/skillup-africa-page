import React from 'react';
import Logo from './utils/Logo';
import NavLinks from './utils/NavLinks';
import arrow from '../assets/icons/Arrow.svg';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center'>
      <Logo />
      <div className='flex justify-between items-center gap-24'>
        <NavLinks ulStyles='flex text-xl gap-24 text-green-dark' />
        <button className='nav-btn'>
          Apply Now <img src={arrow} alt='btn' />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
