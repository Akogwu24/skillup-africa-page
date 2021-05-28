import React from 'react';
import Text from '../components/utils/Text';

const BecomeIntern = () => {
  return (
    <div className='h-64 flex justify-center items-center text-center mb-16 mt-32'>
      <Text
        paragraphStyle='text-5xl text-green font-bold'
        header='Beccome an intern'
        headerStyle='text-2xl text-blue font-bold mb-5'
        firstParagraph='How It Works'
      />
    </div>
  );
};

export default BecomeIntern;
