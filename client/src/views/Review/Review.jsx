import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { reviews } from '../../Config/Reviews/Review';

function Review() {
  return (
    <div className='bg-slate-50 '>
      <Navbar></Navbar>
      <div className='m-10'>
      <h1 className='text-3xl text-center font-bold merriweather-sans mt-16 text-blue-950' style={{fontWeight:700}}>What Our Customer Says</h1>
      <p className='text-center platypi font-extrabold my-10 space-y-5 text-lg text-slate-600'>Discover how our commitment to a greener planet has positively impacted our customers' lives and inspired sustainable change.<br></br>Hear from our customers who are making a difference with us, one eco-friendly step at a time.</p>
      <div className='flex flex-wrap mx-10'>
        {
          reviews.map((review,i)=>{
            const {photo,view,name}=review;
            return(
              <ReviewCard photo={photo} view={view} name={name} i={i}></ReviewCard>
            )
          })
        }
      </div>
   
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Review
