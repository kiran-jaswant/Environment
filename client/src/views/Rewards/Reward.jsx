import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import reward from './Images/reward.png';
import star from './Images/star.png';
import earth from './Images/earth.jpg';
import Rewardcard from '../../components/Rewardcard/Rewardcard';
import { Rewardcardinfo } from '../../Config/Reward/Reward';
import ScrollUp from '../../components/ScrollUp/ScrollUp';

function Reward() {
  return (
    <div className=' ' id='top'>
      <Navbar></Navbar>
      <div className='flex justify-around h-screen bg-gradient-to-r from-lime-100 to-lime-200  '>
        <div class="mt-24 ">
          <img src={reward}></img>
          <img src={star} className='w-10 shadow-2xl relative bottom-96 left-56'></img>
          <img src={star} className='w-9 drop-shadow-lg relative bottom-96 left-36'></img>
          <img src={star} className='w-12 drop-shadow-lg relative bottom-96 left-8'></img>
          <img src={star} className='w-10 drop-shadow-lg relative bottom-96 left-14'></img>
          <img src={star} className='w-9 drop-shadow-lg relative bottom-96'></img>
          <img src={star} className='w-12 drop-shadow-lg relative bottom-96 left-14'></img>
          <img src={star} className='w-10 drop-shadow-lg relative bottom-60 left-5'></img>
          <img src={star} className='w-8 drop-shadow-lg relative bottom-80 left-5'></img>
          <img src={star} className='w-8 drop-shadow-lg relative bottom-96 left-3'></img>
          <img src={star} className='w-9 drop-shadow-lg relative bottom-96 left-32'></img>
          <img src={star} className='w-10 drop-shadow-lg relative bottom-96 left-44' ></img>
        </div>
        <div className='mr-16 w-1/2 mt-24'>
          <h1 className='text-3xl font-bold merriweather-sans mt-16 text-blue-950' style={{ fontWeight: 700 }}>Unlock Exclusive <br></br>Rewards As <span className='text-lime-700'>You Participate</span></h1>
          <p className='platypi text-slate-600  mt-7'>Are you ready to make a real difference? The health of our planet is in your hands, and every small action counts! Join our community of eco-warriors today and take part in meaningful environmental activities that help protect our Earth. Whether you’re planting trees, reducing plastic use, or spreading awareness, your efforts contribute to a brighter, greener future.</p>
          <a href='#reward-cards'><button className='border-2 border-blue-950 scroll-smooth bg-blue-950 text-white px-9 py-3 mx-0 my-9 font-bold rounded-md hover:bg-transparent hover:text-blue-950'>Explore</button></a>
        </div>

      </div>
      <div className='bg-slate-50 mt-0 h-screen'>
        <h1 className='text-center p-5 text-4xl font-bold text-blue-950 '>Why Participate?</h1>
        <div className='flex justify-evenly mx-28 my-16  '>
          <div className=' '>
            <div className='border-3 rounded-md  shadow-lg m-5 p-2 hover:bg-gradient-to-r  hover:from-green-200  hover:to-green-100 hover:duration-100  cursor-pointer'>
              <h1 className='text-center p-2 text-lime-700 text-lg' style={{ fontWeight: 600 }} >🌍 Make a Positive Impact</h1>
              <p className='p-2 mx-2 text-slate-600 cormorant-garamond-light text-center '>Every step you take towards sustainability helps combat climate change, reduce pollution, and preserve our natural resources.</p>

            </div>
            <div className='border-3 rounded-md  shadow-lg m-5 p-2 hover:bg-gradient-to-r  hover:from-green-200  hover:to-green-100 hover:duration-100 cursor-pointer '>
              <h1 className='text-center p-2 text-lime-700 text-lg' style={{ fontWeight: 600 }} >🌿 Be a Leader</h1>
              <p className='p-2 mx-2 text-slate-600 cormorant-garamond-light text-center '>Inspire others by sharing your journey and successes. Your actions can motivate friends, family, and neighbors to join the cause.</p>

            </div>

          </div>
          <div>
            <img src={earth} className='w-72 mt-10'></img>
          </div>
          <div className=''>
            <div className='border-3 rounded-md  shadow-lg m-5 p-2 hover:bg-gradient-to-r  hover:from-green-200  hover:to-green-100 hover:duration-100 cursor-pointer '>
              <h1 className='text-center p-2 text-lime-700 text-lg' style={{ fontWeight: 600 }} >🎁 Earn Exciting Rewards</h1>
              <p className='p-2 mx-2 text-slate-600 cormorant-garamond-light text-center '> From eco-friendly products and exclusive content to recognition and special event invites, our rewards program celebrates your dedication to the environment.</p>

            </div>
            <div className='border-3 rounded-md  shadow-lg m-5 p-2 hover:bg-gradient-to-r  hover:from-green-200  hover:to-green-100 hover:duration-100 cursor-pointer'>
              <h1 className='text-center p-2 text-lime-700 text-lg' style={{ fontWeight: 600 }} >👫 Join a Community</h1>
              <p className='p-2 mx-2 text-slate-600 cormorant-garamond-light text-center '> Connect with like-minded individuals who share your passion for the planet. Together, we can achieve so much more!</p>

            </div>

          </div>
        </div>
      </div>
      <div className='-mt-40'>
        <h1 className='text-center  p-5 text-4xl font-bold text-blue-950 ' id="reward-cards">Rewards For Different Environmental Activities</h1>
        <div className='flex flex-wrap justify-evenly mt-10'>
          {
            Rewardcardinfo.map((rewardinfo, i) => {
              const { img, activity, rewards } = rewardinfo;

              return (
                <Rewardcard img={img} activity={activity} rewards={rewards} i={i}></Rewardcard>

              )
            })

          }

        </div>
      </div>

     <a href='#top'><ScrollUp></ScrollUp></a>
      <Footer></Footer>
    </div>
  )
}

export default Reward
