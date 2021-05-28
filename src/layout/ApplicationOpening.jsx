import React from 'react';
import Text from '../components/utils/Text';

const ApplicationOpening = () => {
  return (
    <div className='application-openeing h-64 flex justify-center items-center text-center border-t-2 border-b-2 border-gray-light'>
      <Text
        paragraphStyle='text-2xl '
        header='Application Openeing Date'
        headerStyle='text-4xl font-bold mb-5'
        firstParagraph='1st August 2020'
      />
    </div>
  );
};

export default ApplicationOpening;
