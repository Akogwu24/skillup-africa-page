import React from 'react';
import Button from './utils/Button';
import bro from '../assets/images/addiction-bro.svg';
import Text from './utils/Text';
import Calender from './Calender';

const Hero = () => {
  return (
    <section className='flex justify-between items-center'>
      <div className='max-w-3xl'>
        <Text
          header='Skill Up Internship Programmer.'
          firstParagraph='Skill up Internship seeks to support individuals interested in
        building a career in Tech by providing a robust industry-standard
        experience characterised by measurable hands-on training crafted to
        help you suceed.'
          headerStyle='text-green text-6xl font-bold'
          paragraphStyle='text-2xl leading-10 text-gray my-8'
        />
        <Button
          btnStyles='bg-blue text-2xl py-5 px-16 rounded-xl'
          children='Get Started'
        />
        <Calender />
      </div>
      <div className='w-1/2'>
        <img src={bro} alt='' />
      </div>
    </section>
  );
};

export default Hero;