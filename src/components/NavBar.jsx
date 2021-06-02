import React, { useState, useEffect } from 'react';
import Logo from './utils/Logo';
import NavLinks from './utils/NavLinks';
import arrow from '../assets/icons/Arrow.svg';
import { CgMenu } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);

    return window.removeEventListener('resize', hideMenu);
  });

  return (
    <div className='nav-bar flex justify-between      items-center'>
      <Logo logoContainerStyle='w-60' />

      <div className='z-10 cursor-pointer md:hidden' onClick={handleClick}>
        {isOpen ? (
          <AiOutlineClose className='z-10' size={40} />
        ) : (
          <CgMenu className='z-10' size={40} />
        )}
      </div>

      <div
        onClick={toggle}
        className={
          isOpen
            ? 'fixed top-0 right-0 flex bg-gray-light h-full w-full sm:w-1/2 flex-col justify-center items-center gap-10'
            : 'hidden md:flex gap-5'
        }
      >
        <NavLinks ulStyles='flex flex-col md:flex-row md:items-center text-3xl md:text-xl lg:text-2xl gap-10 lg:gap-16 text-green-dark' />

        <button className='nav-btn '>
          Apply Now <img src={arrow} alt='btn' />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
