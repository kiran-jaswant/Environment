
import React from 'react';
import logo from '../../../Images/logo.png';

function Footer() {
  return (
    <div className='bg-blue-950 flex justify-around text-white'>
        <div className='p-7'>
            <img src={logo}  style={{ filter: 'drop-shadow(1px 5px 7px rgba(255, 255, 255, 0.5))' }} alt='Planet Pulse Logo' className='h-32 w-32'></img>
            <h1 className='   text-indigo-50 font-semibold text-2xl font-serif italic '>Planet<span> Pulse</span></h1>
            <p>Planet Pulse, where the heartbeat of nature guides our mission to protect and preserve our planet. We are dedicated to fostering a sustainable future through education, conservation, and community action. Join us in our journey to nurture the environment. Together, we can make a difference—one pulse at a time.</p>

        </div> 
        <div className=''>
            
            
        </div>

      
    </div>
  )
}

export default Footer;
