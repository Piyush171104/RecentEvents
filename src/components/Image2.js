import React from 'react';
import pic2 from '../assets/pic2.jpg';

const Image2 = () => {
  return (
    <div className="relative border-4 border-black">
      <div className="border-4 border-yellow-400">
        <img
          src={pic2}
          alt="Event 2"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2">
        <p className="text-black">Event 2</p>
      </div>
    </div>
  );
};

export default Image2;
