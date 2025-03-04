import React from 'react';
import Booker from './booker';

export default function BookingCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="w-full px-20 mb-40">
        <div className="border-t border-border" />
      </div>
      <h1 className="text-7xl font-serif mt-10">
        Make a <span className="text-red-500">15-min call</span>
      </h1>
      <span className="text-xl mt-5">
        I would love to know about your idea. Please select the time that fits you!
      </span>
      <div className="flex items-center justify-center h-full w-full mt-20">
        <Booker />
      </div>
      {/* <div className="w-full px-20 mt-40">
        <div className="border-b-2 border-border" />
      </div> */}
    </div>
  );
}