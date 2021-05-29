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
      <section className=' container my-10 px-44 flex justify-between gap-20 items-center'>
        <div className='flex w-3/5'>
          <div className='number-one mr-10'>
            <img src={one} alt='one' />
          </div>
          <div>
            <Text
              header='Apply For Program'
              headerStyle='font-semibold text-5xl text-green  '
              firstParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eg.'
              paragraphStyle='text-2xl my-6'
            />
            <Button children='Apply Now' />
          </div>
        </div>

        <div className='steps w-2/5'>
          <img className='w-full' src={applyImage} alt='mask girl' />
        </div>
      </section>

      <section className='container my-20 px-44 flex justify-between gap-20 items-center'>
        <div className='steps w-2/5'>
          <img className='w-full' src={manLeft} alt='mask girl' />
        </div>
        <div className='flex ml-20 pl-20 w-3/5'>
          <div className='number-one mr-10'>
            <img src={two} alt='two' />
          </div>
          <div>
            <Text
              header='Apply For Program'
              headerStyle='font-semibold text-5xl text-green  '
              firstParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eg.'
              paragraphStyle='text-2xl my-6'
            />
          </div>
        </div>
      </section>

      <section className='container my-20 px-44 flex justify-between gap-20 items-center'>
        <div className='flex w-3/5'>
          <div className='number-one mr-10'>
            <img src={three} alt='one' />
          </div>
          <div>
            <Text
              header='Apply For Program'
              headerStyle='font-semibold text-5xl text-green  '
              firstParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eg.'
              paragraphStyle='text-2xl my-6'
            />
          </div>
        </div>

        <div className='steps w-2/5'>
          <img className='w-full' src={manRight} alt='mask girl' />
        </div>
      </section>

      <section className='container my-20 px-44 flex justify-between gap-20 items-center'>
        <div className='steps w-2/5'>
          <img className='w-full' src={girlLeft} alt='girl-left' />
        </div>
        <div className='flex ml-20 pl-20 w-3/5'>
          <div className='number-one mr-10'>
            <img src={four} alt='two' />
          </div>
          <div>
            <Text
              header='Apply For Program'
              headerStyle='font-semibold text-5xl text-green  '
              firstParagraph='Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eg.'
              paragraphStyle='text-2xl my-6'
            />
            <Button children='Apply Now' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
