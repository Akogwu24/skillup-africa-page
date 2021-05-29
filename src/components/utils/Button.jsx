import React from 'react';

const Button = ({ btnStyles, children, icon }) => {
  return (
    <button
      className={`text-white font-semibold bg-blue py-4 text-2xl px-16 rounded-xl mt-5 ${btnStyles}`}
    >
      {children || 'clickme'} {icon ? <img src={icon} alt='icon' /> : ''}
    </button>
  );
};

export default Button;
