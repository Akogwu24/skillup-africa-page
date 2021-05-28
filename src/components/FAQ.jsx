import React from 'react';
import plus from '../assets/icons/add.svg';
import cross from '../assets/icons/signs-cross.svg';

const FAQ = ({ question, answer }) => {
  return (
    <div className=' faq border-t-2 flex justify-between w-2/3 mx-auto py-5'>
      <div>
        <p className='text-2xl mb-5'>{question || 'what are....'}</p>
        <p className='text-lg'>{answer || 'lorem  mre'}</p>
      </div>

      <div>
        <img src={plus} alt='faq' />
      </div>
    </div>
  );
};

export default FAQ;
