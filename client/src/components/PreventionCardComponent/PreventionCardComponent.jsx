import React from 'react';
import Card from '../Card/Card';
import bg1 from './bg1.jpg';
import bg2 from './bg2.jpg';

function PreventionCardComponent() {
  return (
    <div className='mt-14'>
      <div className='w-full h-96 bg-fixed relative overflow-hidden bg-cover ' style={{ backgroundImage: `url(${bg1})`,height:570}}></div>
      <div className='relative bottom-96 text-center space-x-2 text-white text-lg -mt-36'>
        <p className='platypi'>Take five minutes to help save our planet. </p>
        <p className='platypi'>Your actions matter</p>
        <h1 className='merriweather-sans  font-extrabold text-2xl  m-6 ' style={{fontWeight:700}}>PREVENTION IS BETTER THAN CURE</h1>
      <Card></Card>
            
        </div>
     
      
    </div>
  )
}

export default PreventionCardComponent;
