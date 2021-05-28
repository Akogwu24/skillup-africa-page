import React from 'react';

const NavLinks = () => {
  return (
    <nav className=''>
      <ul className='flex text-xl gap-24 text-green-dark'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>How It Works</a>
        </li>
        <li>
          <a href='#'>FAQ</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
