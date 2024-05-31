import React from 'react';
import {Link} from 'react-router-dom';

function Middle() {
  return (
    <div className='flex justify-between m-32 mx-60'>
        <div className='mr-16'>
            <h1 className='italic platypi text-lime-800 text-xl   '><span className='italic platypi text-slate-500'>About</span> Planet Pulse</h1>
            <h1 className='merriweather-sans my-5 text-2xl text-blue-900'>We Are The Saviours of Planet Earth</h1>
            <p className='my-8 cormorant-garamond-light text-base space-x-16 text-slate-600'>
            Saving the Earth is a collective responsibility that demands urgent action. With our planet facing unprecedented environmental challenges like climate change, deforestation, and pollution, it's essential that we prioritize sustainable practices in every aspect of our lives. From reducing our carbon footprint and embracing renewable energy to advocating for conservation efforts and protecting biodiversity, there are countless ways we can make a positive impact. By coming together as a global community and taking proactive steps to preserve our precious natural resources, we can ensure a healthier, more sustainable future for generations to come. It's not just about saving the Earth; it's about safeguarding the home we all share.
            </p>
            <Link to='./about'><button className='border-solid rounded-lg  bg-lime-700 text-white px-5 py-3 mx-0 my-6 hover:bg-lime-600'>Know More</button></Link>

            

        </div>
      <img src='http://wp.hostlin.com/podgorica/images/resource/about.png' className='' style={{height:450}}></img>
    </div>
  )
}

export default Middle
