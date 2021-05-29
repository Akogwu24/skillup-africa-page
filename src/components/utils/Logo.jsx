import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Logo = () => {
  return (
    <Link to='/' className='w-60'>
      <img className='w-full' src={logo} alt='logo' />
    </Link>
  );
};

export default Logo;
