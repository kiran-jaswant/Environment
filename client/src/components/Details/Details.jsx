import React from 'react';
import img1 from './detail1.jpg';
import img2 from './detail2.jpg';

function Details() {
  return (
    <div className='mt-20'>
      <div className='bg-green-50 flex justify-between mx-16 my-7 rounded-lg shadow-lg p-10'>
        <div className='m-5'>
            <h2 className='text-xl p-3 mx-1 platypi text-green-800 font-bold'>Earth is Life</h2>
            <h1 className='text-3xl font-extrabold  p-3 mx-1 text-blue-900 merriweather-sans '>Nature's Legacy Our Responsibility</h1>
            <p className='mx-1 p-3 text-justify cormorant-garamond-light text-base text-slate-600'>The natural environment encompasses a diverse array of ecosystems, each characterized by its unique climate, biodiversity, and geographical features. From lush forests to arid deserts, and from expansive oceans to towering mountains, the natural environment provides habitats for a myriad of plant and animal species. Climate, shaped by factors like temperature, precipitation, and wind patterns, dictates the distribution of these ecosystems and influences the life within them. </p>

        </div>
        <div >
            <img src={img1} className='rounded-lg shadow-2xl  m-3'></img>

        </div>

      </div>

      <div className='bg-green-50 flex justify-between mx-16 my-7 rounded-lg shadow-lg p-10'>
        
        <div >
            <img src={img2} className='rounded-lg shadow-2xl  m-3'></img>

        </div>
        <div className='mx-10'>
            <h2 className='text-xl p-3 mx-1 text-green-800 font-bold platypi'> Nature is Precious </h2>
            <h1 className='text-3xl font-extrabold merriweather-sans  p-3 mx-1 text-blue-900'>Understand Your Responsibilities</h1>
            <p className='mx-1 p-3 text-justify cormorant-garamond-light text-base text-slate-600 '>The natural environment encompasses a diverse array of ecosystems, each characterized by its unique climate, biodiversity, and geographical features. From lush forests to arid deserts, and from expansive oceans to towering mountains, the natural environment provides habitats for a myriad of plant and animal species. Climate, shaped by factors like temperature, precipitation, and wind patterns, dictates the distribution of these ecosystems and influences the life within them. </p>

        </div>

      </div>
    </div>
  )
}

export default Details;
