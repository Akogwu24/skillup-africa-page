import React from 'react';
import one from '../assets/icons/01.svg';
import Text from '../components/utils/Text';
import Button from '../components/utils/Button';
import applyImage from '../assets/images/Mask-girl.svg';
import manLeft from '../assets/images/man-left.svg';
import two from '../assets/icons/02.svg';
import three from '../assets/icons/03.svg';
import manRight from '../assets/images/man-right.svg';
import girlLeft from '../assets/images/girl-left.svg';
import four from '../assets/icons/04.svg';

const Steps = () => {
  return (
    <>
      <section className='step-container container my-10 2xl:px-44 flex flex-col-reverse text-center justify-between gap-20 items-center'>
        <div className='flex flex-col sm:w-3/5'>
          <div className='number-one mr-10 sm:mr-0'>
            <img src={one} alt='one' />
          </div>
          <div>
            <Text
              header='Apply For Program'
              headerStyle='font-semibold text-4xl sm:text-5xl text-green  '
              firstParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eg.'
              paragraphStyle='text-xl text-justify sm:text-2xl my-6'
            />
            <Button children='Apply Now' />
          </div>
        </div>

        <div className='steps w-11/12 sm:w-2/5'>
          <img className='w-full' src={applyImage} alt='mask girl' />
        </div>
      </section>

      <section className='step-container container my-20 2xl:px-44 flex flex-col justify-between gap-20 items-center text-center'>
        <div className='steps w-11/12 sm:w-2/5'>
          <img className='w-full' src={manLeft} alt='mask girl' />
        </div>
        <div className='flex flex-col sm:ml-20 sm:pl-20 sm:w-3/5 sm:ml-0 sm:pl-0'>
          <div className='number-one mr-10'>
            <img src={two} alt='two' />
          </div>
          <div>
            <Text
              header='Apply For Program'
              headerStyle='font-semibold text-4xl sm:text-5xl text-green  '
              firstParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eg.'
              paragraphStyle='text-2xl my-6 text-justify'
            />
          </div>
        </div>
      </section>

      <section className='step-container container my-20 2xl:px-44 flex flex-col-reverse justify-between gap-20 items-center text-center'>
        <div className='flex flex-col sm:w-3/5'>
          <div className='number-one mr-10'>
            <img src={three} alt='one' />
          </div>
          <div>
            <Text
              header='Apply For Program'
              headerStyle='font-semibold text-4xl sm:text-5xl text-green  '
              firstParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eg.'
              paragraphStyle='text-2xl my-6 text-justify'
            />
          </div>
        </div>

        <div className='steps w-11/12 sm:w-2/5'>
          <img className='w-full' src={manRight} alt='mask girl' />
        </div>
      </section>

      <section className='step-container container my-20 2xlpx-44 flex flex-col justify-between gap-20 items-center text-center'>
        <div className='steps w-11/12 sm:w-2/5'>
          <img className='w-full' src={girlLeft} alt='girl-left' />
        </div>
        <div className='flex flex-col sm:ml-20 sm:pl-20 sm:w-3/5'>
          <div className='number-one mr-10'>
            <img src={four} alt='two' />
          </div>
          <div>
            <Text
              header='Apply For Program'
              headerStyle='font-semibold text-4xl sm:text-4xl text-green  '
              firstParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eg.'
              paragraphStyle='text-2xl my-6 text-justify'
            />
            <Button children='Apply Now' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
