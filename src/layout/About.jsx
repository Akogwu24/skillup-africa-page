import React from 'react';
import Text from '../components/utils/Text';
import Button from '../components/utils/Button';
import aboutGirls from '../assets/images/about-image.svg';

const About = () => {
  return (
    <div className='container my-10 flex flex-col justify-between pt-20 items-center'>
      <div className=' md:w-2/5 w-4/5 mb-10'>
        <img className='w-full' src={aboutGirls} alt='girls' />
      </div>
      <div className='md:w-1/2 sm:w-4/5 px-5'>
        <Text
          textContainer='text-center'
          preHeader='What is it about?'
          preheaderStyle='red-hat-display text-blue text-2xl font-bold'
          header='About The Internship'
          headerStyle='red-hat-display text-green text-4xl md:text-5xl py-4 font-bold'
          firstParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.'
          paragraphStyle='text-gray text-xl md:text-2xl text-justify'
          secondParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.'
        />
        <Button children='Get Started' btnStyles='bg-blue' />
      </div>
    </div>
  );
};

export default About;
