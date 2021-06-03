import React from 'react';
import Text from '../components/utils/Text';
import CardComponent from '../components/CardComponent';
import frontend from '../assets/images/frontend.svg';
import backend from '../assets/images/backend.svg';

const LearningPaths = () => {
  return (
    <section className='container my-10'>
      <div className='red-hat-display mb-28 mt-44 flex justify-center items-center text-center'>
        <Text
          paragraphStyle='text-xl text-gray w-11/12 mx-auto '
          header='Learning Paths'
          headerStyle='text-5xl font-bold mb-5 text-green md:text-6xl'
          firstParagraph='Sharpen and build your skills by taking these courses before applying'
        />
      </div>

      <div className='flex flex-col sm:flex-row justify-between items-center lg:justify-center lg:gap-32 px-2 sm:px-20 gap-36 text-center sm:px-5 sm:gap-10'>
        <CardComponent
          aosProps='zoom-out-left'
          cardContainer='card-container flex flex-col items-center justify-center sm:w-1/2 lg:w-1/3  md:p-28 bg-white shadow-2xl border-b-4 border-blue rounded-lg sm:p-10'
          img={frontend}
          imageContainer=''
          imgStyles='mx-auto'
          list1='LEARN HTML'
          list2='LEARN CSS'
          list3='LEARN JAVASCRIPT'
          listStyles='text-xl py-1 text-gray'
          heading='Frontend Development'
          headingStyles='text-4xl text-green my-4'
        />
        <CardComponent
          aosProps='zoom-out-right'
          cardContainer='card-container flex flex-col items-center justify-center sm:w-1/2 lg:w-1/3 md:p-28 bg-white shadow-2xl border-b-4 border-blue rounded-lg px-2 sm:p-10'
          img={backend}
          imgStyles='mx-auto'
          list1='LEARN DS AND ALGORITHMS'
          list2='LEARN JAVA PROGRAMMING'
          listStyles='text-xl py-1 text-gray'
          heading='Backend Development'
          headingStyles='text-4xl text-green my-4'
        />
      </div>
    </section>
  );
};

export default LearningPaths;
