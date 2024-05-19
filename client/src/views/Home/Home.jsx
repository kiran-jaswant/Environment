import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/ImageCarousel/ImageCarousel';
import img1 from './Images/soil.jpg';
import img2 from './Images/water.jpg';
import img3 from './Images/air.jpg';
import front from './Images/front.jpeg'
import Details from '../../components/Details/Details';

const images=[img1,img2,img3]



export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Header images={images}></Header>
        <Details></Details>
       
    </div>
  )
}
