import React from 'react';
import CalenderCard from './utils/CalenderCard';

const Calender = () => {
  return (
    <div className='flex gap-3'>
      <CalenderCard />
      <CalenderCard date={22} timeUnit='HOURD' />
      <CalenderCard date={40} timeUnit='MINUITES' />
      <CalenderCard date={15} timeUnit='SECONDS' />
    </div>
  );
};

export default Calender;
