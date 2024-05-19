import React from 'react';
import img1 from './detail1.jpg';
import img2 from './detail2.jpg';

function Details() {
  return (
    <div>
      <div className='bg-green-100 flex  m-7 rounded-lg shadow-lg p-7'>
        <div>
            <h2 className='text-lg p-3 mx-2 text-green-900'>Earth is Life</h2>
            <h1 className='text-2xl '><span>Nature's Legacy</span>Our Responsibility</h1>
            <p>The natural environment encompasses a diverse array of ecosystems, each characterized by its unique climate, biodiversity, and geographical features. From lush forests to arid deserts, and from expansive oceans to towering mountains, the natural environment provides habitats for a myriad of plant and animal species. Climate, shaped by factors like temperature, precipitation, and wind patterns, dictates the distribution of these ecosystems and influences the life within them. </p>

        </div>
        <div>
            <img src={img1} className='rounded-lg shadow-2xl'></img>

        </div>

      </div>
    </div>
  )
}

export default Details;
