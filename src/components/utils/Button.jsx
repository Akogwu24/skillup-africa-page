import React from 'react';

const Button = ({ btnStyles, children, icon }) => {
  return (
    <button className={`text-white ${btnStyles}`}>
      {children || 'clickme'} {icon ? <img src={icon} alt='icon' /> : ''}
    </button>
  );
};

export default Button;
