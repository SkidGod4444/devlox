import React from 'react';
import Booker from './booker';

export default function BookingCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-2 sm:px-4 md:px-0">
      <div className="w-full px-2 sm:px-10 md:px-20 mb-10 sm:mb-20 md:mb-40">
        <div className="border-t border-border" />
      </div>

      <h1 className="text-3xl md:text-7xl font-serif mt-5 text-center">
        Make a <span className="text-red-500">15-min call</span>
      </h1>

      <span className="text-sm sm:text-base md:text-xl mt-3 sm:mt-5 text-center max-w-[300px] sm:max-w-[500px] md:max-w-[600px]">
        I would love to know about your idea. Please select the time that fits you!
      </span>

      <div className="flex items-center justify-center h-full w-full mt-10 sm:mt-15 md:mt-20 px-1 sm:px-2">
        <div className="w-full max-w-[400px] md:max-w-[900px]">
          <Booker />
        </div>
      </div>
    </div>
  );
}