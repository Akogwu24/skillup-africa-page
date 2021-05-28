import React from 'react';
import Text from '../components/utils/Text';
import CardComponent from '../components/CardComponent';
import frontend from '../assets/images/frontend.svg';
import backend from '../assets/images/backend.svg';

const LearningPaths = () => {
  return (
    <section className='container my-10'>
      <div className='my-44 flex justify-center items-center text-center'>
        <Text
          paragraphStyle='text-2xl w-11/12 mx-auto '
          header='Learning Paths'
          headerStyle='text-4xl font-bold mb-5 text-green text-6xl'
          firstParagraph='Sharpen and build your skills by taking these courses before applying'
        />
      </div>

      <div className='flex justify-between items-center gap-36 text-center'>
        <CardComponent
          cardContainer='card-container w-1/2 p-28 bg-white shadow-lg border-b-4 border-blue rounded-lg'
          img={frontend}
          imageContainer=''
          imgStyles='mx-auto'
          list1='LEARN HTML'
          list2='LEARN CSS'
          list3='LEARN JAVASCRIPT'
          listStyles='text-lg py-1 text-gray'
          heading='Frontend Development'
          headingStyles='text-4xl text-green my-4'
        />
        <CardComponent
          cardContainer='card-container w-1/2 p-28 shadow-lg bg-white border-b-4 border-blue rounded-lg'
          img={backend}
          list1='LEARN DS AND ALGORITHMS'
          list2='LEARN JAVA PROGRAMMING'
          listStyles='text-lg py-1 text-gray'
          heading='Backend Development'
          headingStyles='text-4xl text-green my-4'
        />
      </div>
    </section>
  );
};

export default LearningPaths;
