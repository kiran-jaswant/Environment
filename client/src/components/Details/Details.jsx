import React from 'react';
import img1 from './detail1.jpg';
import img2 from './detail2.jpg';

function Details() {
  return (
    <div className='-mt-72'>
      <div className='bg-green-50 flex justify-between mx-16 my-7 rounded-lg shadow-lg p-10'>
        <div className='m-5'>
            <h2 className='text-xl p-3 mx-1 platypi text-lime-800 font-bold'>Earth is Life</h2>
            <h1 className='text-3xl font-extrabold  p-3 mx-1 text-blue-900 merriweather-sans '>Nature's Legacy Our Responsibility</h1>
            <p className='mx-1 p-3 mt-5 text-justify cormorant-garamond-light text-base text-slate-600'>"Earth is our home, and it's up to us to take care of it. Nature gives us so much, like clean air, water, and food. It's our job to protect these gifts by being kind to the environment. By picking up trash, planting trees, and using less plastic, we can make a big difference. Let's work together to keep our planet healthy for everyone and everything that calls it home. Let us embrace this responsibility with reverence and commitment, nurturing the harmonious coexistence of humanity and nature for generations to come." </p>
            <p className='platypi p-2 text-slate-700'>"Earth is not just our home; it's our legacy. Let's protect it like our lives depend on it, because they do."</p>

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
            <h2 className='text-xl p-3 mx-1 text-lime-800 font-bold platypi'> Nature is Precious </h2>
            <h1 className='text-3xl font-extrabold merriweather-sans  p-3 mx-1 text-blue-900'>Understand Your Responsibilities</h1>
            <p className='mx-1 p-3 text-justify cormorant-garamond-light text-base text-slate-600 '>"Nature is like a treasure chest full of wonders, and we're the lucky ones who get to take care of it. It's like having a big responsibility, but it's also a really important job. We need to make sure we don't hurt nature and that we keep it safe and healthy. So let's all work together to be good stewards of the Earth, because when we take care of nature, it takes care of us too." </p>
            <p className='platypi p-2 text-slate-700'>"Nature's preciousness lies not only in its beauty but in its capacity to teach, heal, and inspire. It is a treasure beyond measure."</p>

        </div>

      </div>
    </div>
  )
}

export default Details;
