import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import img from './greenbg.jpg';
import planet from './planet.jpg';
import ScrollUp from '../../components/ScrollUp/ScrollUp';

function About() {
  return (
    <div id='top'>
      <Navbar></Navbar>
      <div className='bg'>
        <div className='w-full  bg-fixed relative overflow-hidden bg-cover' style={{ backgroundImage: `url(${img})`, height: 500 }}></div>
        <div className='relative bottom-96 text-center'>
          <h1 className='text-3xl  text-lime-400 relative  font-bold merriweather-sans mt-16 ' style={{ fontWeight: 700, fontSize: 45, position: "relative", bottom: 85 }}>About us</h1>
          <p className='text-slate-50 text-xl font-semibold -mt-5'>we are devoted planet lovers 💚 and dedicated Earth savers 🌍.</p>
          <p className='text-white mt-12 text-lg italic mx-72'
            style={{
              fontFamily: 'Platypi, serif'
            }}

          >Through Planet Pulse,Our mission is to protect and nurture our beloved and precious planet through sustainable practices.We believe that every small action can lead to significant change, and we are committed to preserving the natural beauty and health of our Earth for future generations. Join us in our passion to save and cherish the planet we call home.</p>
        </div>

      </div>
      <div className='flex  mx-20 rounded-2xl p-10 -mt-40 justify-end mb-16 '>
        <div className='border p-8 mx-5 rounded-2xl shadow-md w-1/2 pl-12'>
          <h2 className='text-lime-700 font-bold text-lg'>How It Started</h2>
          <h1 className='text-blue-900 text-3xl   merriweather-sans mt-8' style={{ fontWeight: 700 }}>Our Dream Is<br></br> Global Environment <br></br>Transformation </h1>
          <p className='text-slate-700 mt-14 mb-5'>
            <span className='font-bold'> Planet-Pulse</span> began with idea of Envirnmental love and need of protection.We loved nature and worried about its future. Seeing pollution and climate change up close inspired us to act. We Want to start with simple projects like community cleanups and tree planting. As more people joined us, our impact will grew and can influence so many people around the world. Today, we are dedicated to promoting sustainability and protecting our planet, driven by the belief that <span className='italic'>"small actions can lead to big changes"</span>.
          </p>

        </div>
        <div className='mx-5 w-1/2  '>
          <img src={planet} className='rounded-2xl shadow-md ' style={{ height: 250, width: 620 }}></img>
          <div className='rounded-2xl shadow-md mt-9 h-60'>
            <h1 className='text-center mb-8 font-bold text-lime-700 underline'>We Are Focusing On:</h1>
            <div className='flex  justify-around  mx-16 text-center'>
              <div className='bg-blue-50 p-5 font-bold  rounded-2xl w-50 m-5 te'>Environment First</div>
              <div className='bg-blue-50 p-5 font-bold  rounded-2xl w-50 m-5'>Innovative Solutions</div>
              <div className='bg-blue-50 p-5 font-bold  rounded-2xl w-50 m-5'>Climate Action</div>
              <div className='bg-blue-50 p-5 font-bold  rounded-2xl w-50 m-5'>Green Living</div>


            </div>
          </div>
        </div>


      </div>
      <div className='bg-lime-600 p-10 py-40'>
        <h1 className='text-3xl  text-center text-white font-bold merriweather-sans my-3 p-2 underline' style={{ fontWeight: 700 }}>OUR MISSION</h1>
        <p className='text-white text-center text-xl font-bold pb-10 '>"Transforming passion into action for a greener, healthier Earth."</p>

      </div>
      <a href='#top'><ScrollUp></ScrollUp></a>
      <Footer></Footer>
    </div>
  )
}

export default About;
