import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ ulStyles }) => {
  return (
    <ul className={ulStyles}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/'>About</Link>
      </li>
      <li>
        <Link to='/'>How It Works</Link>
      </li>
      <li>
        <Link to='/'>FAQ</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
