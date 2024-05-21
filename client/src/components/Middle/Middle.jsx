import React from 'react';
import {Link} from 'react-router-dom';

function Middle() {
  return (
    <div className='flex justify-between m-32 mx-60'>
        <div className='mr-16'>
            <h1 className='italic platypi text-green-700 text-xl   '><span className='italic platypi text-slate-500'>About</span> Planet Pulse</h1>
            <h1 className='merriweather-sans my-5 text-2xl text-blue-900'>We Are The Saviours of Planet Earth</h1>
            <p className='my-8 cormorant-garamond-light text-base space-x-16 text-slate-600'>
            Fight against oppression amplify assistance; countries medicine new approaches The Elders Global South advocate organization equal opportunity of vaccine international vulnerable citizens. Lifting people social challenges democracy microloans fight against malnutrition, think tank social innovation global health truth dignity civic engagement. Design thinking diversification efficient recognize potential marginalized communities human potential governance change.
            </p>
            <Link to='./about'><button className='border-solid rounded-lg  bg-green-700 text-white px-4 py-3 mx-0 my-6 hover:bg-green-600'>Contact Us</button></Link>

            

        </div>
      <img src='http://wp.hostlin.com/podgorica/images/resource/about.png' className='' style={{height:450}}></img>
    </div>
  )
}

export default Middle
