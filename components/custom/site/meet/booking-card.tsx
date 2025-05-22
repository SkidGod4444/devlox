import React from 'react';
import Booker from './booker';

export default function BookingCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4 sm:px-0">
      <div className="w-full sm:px-20 px-4 mb-20 sm:mb-40">
        <div className="border-t border-border" />
      </div>

      <h1 className="text-4xl sm:text-7xl font-serif mt-10 text-center">
        Make a <span className="text-red-500">15-min call</span>
      </h1>

      <span className="text-base sm:text-xl mt-5 text-center max-w-[600px]">
        I would love to know about your idea. Please select the time that fits you!
      </span>

      <div className="flex items-center justify-center h-full w-full mt-20 px-2">
        <div className="w-full max-w-[900px]">
          <Booker />
        </div>
      </div>
    </div>
  );
}