import React from 'react';

const CalenderCard = ({ date, timeUnit }) => {
  return (
    <div className='calender bg-gray-light w-20 text-center py-3  mt-10'>
      <h3 className='date text-4xl pb-3 '>{date || '17'}</h3>
      <h5 className='mt-2 text-sm'>{timeUnit || 'Days'}</h5>
    </div>
  );
};

export default CalenderCard;
