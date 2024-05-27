import React from 'react';
import Home from '../../views/Home/Home';
import About from '../../views/About/About';
import Review from '../../views/Review/Review';
import Blog from '../../views/Blog/Blog';
import Login from '../../views/Login/Login';
import { Link } from 'react-router-dom';
import logo2 from '../../../Images/logo.png';

function Navbar() {
  return (

    <div className='bg-lime-600 flex justify-between h-28 px-4'>
      <div className='flex flex-initial'>
        <img src={logo2} className=' mt-5 w-40 h-40 drop-shadow-2xl '></img>
        <h1 className=' bg-lime-600 mt-9   text-indigo-50 -ml-12 font-semibold text-4xl font-serif italic '>Planet<span className='text-blue-950 	'> Pulse</span></h1>
      </div>
      <div>
        <div className=' bg-lime-600 mt-10 pr-20'>
          <ul className='flex flex-wrap  justify-evenly space-x-10  font-lg text-lg font-semibold text-blue-950 '>

            <li className='cursor-pointer  hover:text-white'><Link to='/'>Home</Link></li>
            <li className='cursor-pointer  hover:text-white'><Link to='/about'>About</Link></li>
            <li className='cursor-pointer  hover:text-white'><Link to='/rewards'>Reward</Link></li>
            <li className='cursor-pointer  hover:text-white'><Link to='/review'>Review</Link></li>
            <li className='cursor-pointer  hover:text-white' ><Link to='/blog'>Blog</Link></li>

          </ul>
        </div>

      </div>



    </div>
  )
}

export default Navbar