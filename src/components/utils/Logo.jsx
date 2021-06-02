import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Logo = ({ logoContainerStyle }) => {
  return (
    <Link to='/' className={logoContainerStyle}>
      <img className='w-full' src={logo} alt='logo' />
    </Link>
  );
};

export default Logo;
