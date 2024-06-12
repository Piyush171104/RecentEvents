import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic4 from '../assets/pic4.jpg';

const Image3 = () => {
  const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/pic4');
    };
  return (
    <div className="relative border-4 border-black cursor-pointer" onClick={handleClick}>
      <div className="border-4 border-yellow-400">
        <img
          src={pic4}
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

export default Image3;
