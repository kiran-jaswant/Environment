import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/ImageCarousel/ImageCarousel';
import img1 from './Images/soil.jpg';
import img2 from './Images/water.jpg';
import img3 from './Images/air.jpg';
import img4 from './Images/earth.jpg';
import Details from '../../components/Details/Details';
import Footer from '../../components/Footer/Footer';
import Middle from '../../components/Middle/Middle';
import Features from '../../components/Features/Features';
import Work from '../../components/Work/Work';
import Why from '../../components/Why/Why';
import Earth from '../../components/Earth/Earth';
import PreventionCardComponent from '../../components/PreventionCardComponent/PreventionCardComponent';
import ScrollUp from '../../components/ScrollUp/ScrollUp';
import './Home.css';

const images=[
  {
    src:img1,
    text:"Soil Health, Nature's Wealth ",
    smtxt:"Preserving the ground beneath our feet."
  },{
    src:img2,
    text:"Water is the Essence of Life itself ",
    smtxt:"Every drop counts,Preserve water, preserve life."
  },
  {
    src:img3,
    text:"Air is Essential to Life",
    smtxt:" Let's safeguard its purity."
  },
  {
    src:img4,
    text:"Green Environment For Life",
    smtxt:"Ensure Green and Healthy Environment for Better Living "
  }
]



export default function Home() {
  return (
    <div id='nav'>
        <Navbar ></Navbar>
        <Header images={images}></Header>
        <Middle></Middle>
        <Work></Work>
        <Earth></Earth>
        <PreventionCardComponent></PreventionCardComponent>
        <Details></Details>
        <Why></Why>
        <Features></Features>
        <a href='#nav' ><ScrollUp></ScrollUp></a>
        <Footer></Footer>
       
    </div>
  )
}
