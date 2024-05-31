import React from 'react';
import arrow from './arrow.png'

function ScrollUp() {
  return (
    <div>
        <img src={arrow} className='border rounded-full p-4 shadow-lg h-16 stroke-gray-100 fixed bottom-10 right-5 hover:shadow-md hover:shadow-gray-500'></img>
      
    </div>
  )
}

export default ScrollUp
