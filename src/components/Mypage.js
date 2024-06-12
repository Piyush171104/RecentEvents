import React from 'react';
import pic1 from '../assets/pic1.jpg'
import Image1 from './Image1.js';
import Image2 from './Image2.js';
import Image3 from './Image3.js';
import Image4 from './Image4.js';

const MyPage = () => {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
        <div className="relative w-full max-w-5xl">
          <img
            src={pic1}
            alt="Large"
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 backdrop-blur-lg">
            <p>abcd</p>
          </div>
        </div>
        <div className="w-full max-w-5xl mt-8 text-center">
          <h2 className="text-3xl font-bold">Recent Events</h2>
          <hr className="border-white mt-2 mb-8 mx-auto w-1/2" />
  

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image1 />
            <Image2 />
            <Image3 />
            <Image4 />
          </div>
        </div>
      </div>
    );
  };
  
  export default MyPage;