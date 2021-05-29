import React, { useState } from 'react';
import CalenderCard from './utils/CalenderCard';

const Calender = ({ timeElapsed }) => {
  const [secondsTimer, setSecondsTimer] = useState('00');
  const [minutesTimer, setMinutesTimer] = useState('00');
  const [hoursTimer, setHoursTimer] = useState('00');
  const [daysTimer, setDaysTimer] = useState('00');

  const countTimer = () => {
    const currentDate = new Date();
    const closingDate = new Date(2021, 4, 30);
    const currentTimeInMilliSeconds = currentDate.getTime();
    const closingTimeInMilliSeconds = closingDate.getTime();
    const timeTillClosingInMilliSeconds =
      closingTimeInMilliSeconds - currentTimeInMilliSeconds;

    //get times till closing
    let seconds = Math.floor(timeTillClosingInMilliSeconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes = minutes % 60;
    hours %= 24;
    // days %= 30;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;
    days = days < 10 ? '0' + days : days;

    if (closingTimeInMilliSeconds < 0) {
      clearInterval();
      timeElapsed = true;
    } else {
      setSecondsTimer(seconds);
      setMinutesTimer(minutes);
      setHoursTimer(hours);
      setDaysTimer(days);
    }
  };

  setInterval(countTimer, 1000);

  return (
    <div className='flex gap-3'>
      <CalenderCard date={daysTimer} />
      <CalenderCard date={hoursTimer} timeUnit='HOURS' />
      <CalenderCard date={minutesTimer} timeUnit='MINUITES' />
      <CalenderCard date={secondsTimer} timeUnit='SECONDS' />
    </div>
  );
};

export default Calender;
