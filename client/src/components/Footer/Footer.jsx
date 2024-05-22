import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';

function Footer() {
  return (
    <div className='bg-blue-950 text-white'>
      <div className='footer-container'>
        <div className='footer-sections '>
       <div className='flex flex-row -ml-8 '>
       <img src={logo} alt='logo' className='footer-img w-36 h-36 ml-8' />
        <h5 className='footer-shop-title  mt-3'>
            <Link to='/' className='footer-anchor text-2xl font-bold text-white italic  hover:underline -ml-14  ' >Planet Pulse</Link>
        </h5>
       </div>
          <div className='section-div -mt-7'>
            <p className='text-base cormorant-garamond-light text-justify '>
            Planet Pulse, where the heartbeat of nature guides our mission to protect and preserve our planet. We are dedicated to fostering a sustainable future through education, conservation, and community action.
            </p>
          </div>

        </div>
        <div className='footer-sections'>
          <h5 className='section-title'> Main Menu</h5>
          <div className='section-div flex flex-col'>
            <Link className='nav-link menu footer-anchor' to='/'> Home </Link>
            <Link className='nav-link menu footer-anchor' to='/login'> Login </Link>

            <Link className='nav-link menu footer-anchor' to='/about'> About us </Link>
            <Link className='nav-link menu footer-anchor' to='/blog'> Read Blogs </Link>
          </div>
        </div>
        <div className='footer-sections'>
          <h5 className='section-title '> Follow Us</h5>
          <div className='section-div flex flex-col'>

            <Link className='nav-link menu footer-anchor'> <FontAwesomeIcon icon={faLinkedin} /> LinkedIn </Link>

            <Link className='nav-link menu footer-anchor'> <FontAwesomeIcon icon={faInstagram} /> Instagram </Link>

            <Link className='nav-link menu footer-anchor'> <FontAwesomeIcon icon={faFacebook} /> Facebook </Link>

            <Link className='nav-link menu footer-anchor'> <FontAwesomeIcon icon={faTwitter} /> Twitter </Link>

          </div>
        </div>
        <div className='footer-sections'>
          <h5 className='section-title'> Contact Us</h5>
          <div className='section-div flex flex-col'>

            <Link to='https://maps.app.goo.gl/N3ngnED1vBDYVvj19' target='black' className='nav-link menu footer-anchor' >Planet Pulse</Link>

            <Link to='mailto:PlanetPulse@gmail.com' className='nav-link menu footer-anchor'>PlanetPulse@gmail.com</Link>
            <Link to='tel:+919373849296' className='nav-link menu footer-anchor'> +91-9373849296</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;