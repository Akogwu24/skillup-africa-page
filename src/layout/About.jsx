import React from 'react';
import Text from '../components/utils/Text';
import Button from '../components/utils/Button';
import aboutGirls from '../assets/images/about-image.svg';

const About = () => {
  return (
    <div className='container my-10 flex justify-between pt-20 items-center'>
      <div className=' w-2/5'>
        <img className='w-full' src={aboutGirls} alt='girls' />
      </div>
      <div className='w-1/2'>
        <Text
          textContainer=''
          preHeader='What is it about?'
          preheaderStyle='red-hat-display text-blue text-2xl font-bold'
          header='About The Internship'
          headerStyle='red-hat-display text-green text-6xl py-4 font-bold'
          firstParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.'
          paragraphStyle='text-gray text-2xl '
          secondParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.'
        />
        <Button children='Get Started' btnStyles='bg-blue' />
      </div>
    </div>
  );
};

export default About;
