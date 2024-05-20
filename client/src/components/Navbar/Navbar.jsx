import React from 'react';
import Home from '../../views/Home/Home';
import About from '../../views/About/About';
import Review from '../../views/Review/Review';
import Blog from '../../views/Blog/Blog';
import Login from '../../views/Login/Login';
import{Link} from 'react-router-dom';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';


function Navbar() {
  return (
    <div className='bg-green-600'>
      <img src={logo2} className='mx-auto w-20 mt-5'></img>
      <h1 className=' bg-green-600 py-5 text-center text-lg  text-indigo-50'><span className='text-white font-semibold text-4xl font-serif'>Planet Pulse</span></h1>
      <div className='flex flex-wrap justify-center bg-green-600'>
        <ul className='flex flex-wrap space-x-10 py-4'>
           
            <li className='cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='cursor-pointer'><Link to='/about'>About</Link></li>
            <li className='cursor-pointer'><Link to='/contact'>Contact</Link></li>
            <li className='cursor-pointer'><Link to='/review'>Review</Link></li>
            <li className='cursor-pointer'><Link to='/blog'>Blog</Link></li>
            
        </ul>
      </div>
    </div>
  )
}

export default Navbar