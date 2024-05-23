import React from 'react';
import './Work.css';
import img from './bgimg.jpg';

function Work() {
   
  return (
    <div className='mt-0 mb-0'>
        <div className='w-full h-96 bg-fixed relative overflow-hidden bg-cover' style={{ backgroundImage: `url(${img})`,height:500}}></div>
        <div className='relative bottom-96 text-center space-x-2'>
            <h1 className='font-extrabold text-white p-2'>THE BEST TIME TO WAKE UP AND <span className='text-green-400'>SAVE OUR PLANET</span> IS NOW</h1>
            <p className='text-semibold platypi text-white my-4 space-x-2 text-base px-1 '>The only way to make this happened is to take action!</p>
            <button className='border-solid rounded-md border-2 border-green-700 bg-green-600 text-white px-7 py-3 mx-0 my-6 font-bold hover:bg-transparent hover:text-green-500 '>START TODAY</button>
            <button className='border-2 text-white px-7 py-3 mx-0 my-6 font-bold rounded-md hover:bg-gray-100 hover:text-green-400'>LEARN MORE </button>

        </div>
      
    </div>
  )
}

export default Work;
