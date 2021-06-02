import React, { useState } from 'react';
import plus from '../assets/icons/add.svg';
import cross from '../assets/icons/signs-cross.svg';

const FAQ = ({ question, answer }) => {
  const [click, setClick] = useState(false);
  const [answerDisplay, setAnswerDisplay] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setAnswerDisplay(!answerDisplay);
  };

  return (
    <div className=' faq border-t-2 flex justify-between w-11/12 sm:w-2/3 mx-auto py-5'>
      <div>
        <p className='text-2xl mb-5'>{question || 'what are....'}</p>
        {answerDisplay && <p className='text-lg'>{answer || 'lorem  mre'}</p>}
      </div>

      <div className='flex-shrink-0' onClick={handleClick}>
        {click ? <img src={cross} alt='faq' /> : <img src={plus} alt='faq' />}
      </div>
    </div>
  );
};

export default FAQ;
