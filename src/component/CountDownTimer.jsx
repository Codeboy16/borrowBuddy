import React, { useEffect, useState } from 'react';
import '../index.css';
import logo from "../../public/img/logo.png";
const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-01-01T00:00:00');
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className=''>
    <div className="h-[100vh] text-center flex flex-col justify-center flex-wrap">
    <h1 className='text-4xl md:text-4xl p-4 font-bold'>Barrow Buddy</h1>
      <h1 className='text-4xl md:text-6xl p-4 font-bold'>Coming Soon</h1>
      <div className='text-4xl md:text-6xl p-7 font-bold mx-auto border border-solid rad'>
        {timeLeft.days} Days  
         {timeLeft.hours>9? ' '+timeLeft.hours : ' 0'+timeLeft.hours} Hours 
         {timeLeft.minutes>9? ' '+timeLeft.minutes : ' 0'+timeLeft.minutes} Minutes 
         {timeLeft.seconds>9? " "+timeLeft.seconds: ' 0'+timeLeft.seconds} Seconds
      </div>

    </div>
    </div>
  );
};

export default CountdownTimer;
