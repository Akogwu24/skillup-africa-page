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
    <footer className='border-t border-gray-semilight my-10'>
      <section className='container my-10 flex justify-between items-start'>
        <div className='pl-10'>
          <Logo />
          <div className='flex items-end mt-3'>
            <img src={location} alt='location' className='w-7' />
            <p>In Ac Felis Quis Torrorin Ac Felis Quis</p>
          </div>
        </div>

        <div className='flex space-x-10 pr-10'>
          <NavLinks ulStyles='flex text-2xl gap-10 text-green-dark' />
          <Link to='facebook.com'>
            <img src={facebook} alt='facebook' className='w-3' />
          </Link>
          <Link to='youtub.com'>
            <img src={youtube} alt='youtube' className='w-6' />
          </Link>
          <Link to='twitter.com'>
            <img src={twitter} alt='twitter' className='w-6' />
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
