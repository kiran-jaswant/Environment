import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { content } from '../../Config/PreventionDetails/PreventionDetails';

function Prevention() {
  const { id } = useParams(); 
  const preventionDetail = content.find(item => item.id === id); 
  if (!preventionDetail) {
    return <p>Prevention detail not found.</p>; 
  }

  const { img,head,description} = preventionDetail;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold my-4">{head}</h1>
        <img src={img}  className="w-full h-auto mb-4" />
        <p className="text-lg text-gray-700">{description}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Prevention;

