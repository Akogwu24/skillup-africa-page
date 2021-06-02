import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../components/utils/Logo';
import location from '../assets/icons/pin.svg';
import facebook from '../assets/icons/facebook.svg';
import youtube from '../assets/icons/youtube.svg';
import twitter from '../assets/icons/twitter.svg';
import NavLinks from '../components/utils/NavLinks';

const Footer = () => {
  return (
    <footer className='border-t border-gray-semilight mt-10'>
      <section className='container my-10 flex justify-between items-start'>
        <div className='pl-10'>
          <Logo logoContainerStyle='w-32 md:w-60 block' />
          <div className='flex items-end mt-3'>
            <img src={location} alt='location' className='w-7' />
            <p>In Ac Felis Quis Torrorin Ac Felis Quis</p>
          </div>
        </div>

        <div className='flex justify-between items-center space-x-10 md:pr-10'>
          <NavLinks ulStyles='hidden md:flex text-2xl gap-10 text-green-dark' />
          <Link to='facebook.com'>
            <img src={facebook} alt='facebook' className='w-5 md:w-4' />
          </Link>
          <Link to='youtub.com'>
            <img src={youtube} alt='youtube' className='w-6  md:w-4' />
          </Link>
          <Link to='twitter.com'>
            <img src={twitter} alt='twitter' className='w-6  md:w-4' />
          </Link>
        </div>
      </section>

      <section className='bg-blue h-16 flex justify-center items-center text-white text-xl'>
        <p>2020 &copy; All rights reserved by Encentral Solutions</p>
      </section>
    </footer>
  );
};

export default Footer;
