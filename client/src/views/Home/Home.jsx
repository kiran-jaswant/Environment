import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/ImageCarousel/ImageCarousel';
import img1 from './Images/soil.jpg';
import img2 from './Images/water.jpg';
import img3 from './Images/air.jpg';
import front from './Images/front.jpeg'
import Details from '../../components/Details/Details';
import Footer from '../../components/Footer/Footer';
import Middle from '../../components/Middle/Middle';
import Features from '../../components/Features/Features';
import Work from '../../components/Work/Work';
import Why from '../../components/Why/Why';
import Earth from '../../components/Earth/Earth';
import PreventionCardComponent from '../../components/PreventionCardComponent/PreventionCardComponent';

const images=[img1,img2,img3]



export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Header images={images}></Header>
        <Middle></Middle>
        <Work></Work>
        <Earth></Earth>
        <PreventionCardComponent></PreventionCardComponent>
        <Details></Details>
        <Why></Why>
        <Features></Features>
        <Footer></Footer>
       
    </div>
  )
}
