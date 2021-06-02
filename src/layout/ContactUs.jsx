import React from 'react';
import Text from '../components/utils/Text';
import Button from '../components/utils/Button';

const ContactUs = () => {
  return (
    <section className='mb-48'>
      <div className='red-hat-display h-64 flex justify-center items-center text-center mb-10 mt-32'>
        <Text
          paragraphStyle='text-5xl text-green font-bold'
          header='Fill the form below'
          headerStyle='text-2xl text-blue font-bold mb-5'
          firstParagraph='Contact Us'
        />
      </div>

      <div className='contact-us flex flex-col space-y-6 px-5 mx-auto w-2/5 mx-auto'>
        <input
          type='text'
          placeholder='Name*'
          className='p-5 border-2 border-gray-semilight rounded-md'
        />
        <input
          type='text'
          placeholder='Email*'
          className='p-5 border-2 border-gray-semilight rounded-md'
        />
        <textarea
          type='text'
          rows='10'
          style={{ resize: 'none' }}
          placeholder='Brief note'
          className='p-5 border-2 border-gray-semilight rounded-md'
        ></textarea>
        <Button children='Submit' btnStyles='w-1/3 text-3xl' />
      </div>
    </section>
  );
};

export default ContactUs;
