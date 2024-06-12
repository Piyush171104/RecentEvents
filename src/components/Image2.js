import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic3 from '../assets/pic3.jpg';

const Image2 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pic3');
  };
  return (
    <div className="relative border-4 border-black cursor-pointer" onClick={handleClick}>
      <div className="border-4 border-yellow-400">
        <img
          src={pic3}
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
