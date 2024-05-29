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

  const { img,head,description,head2,ways} = preventionDetail;

  return (
    <div>
      <Navbar />
     <div className='m-14 bg-blue-100 py-10  '>
     <h1 className="text-2xl font-bold text-center p-6 text-blue-900">{head}</h1>
     <div className=" mx-24 flex p-3 justify-between ">
        
        <div className='border-2 p-8 rounded-md  hover:cursor-pointer hover:shadow-md bg-white ' style={{width:720}}>
          <h1 className='font-bold text-green-800'>Why it is necessary ?</h1>
        <p className="text-base text-gray-700 mt-5" >{description}</p>

        </div>
        
        <div>
        <img src={img}  className=" rounded-2xl shadow-2xl mt-4 cursor-pointer" style={{height:370,width:450}} />
        </div>
      
        
      </div>
     </div>
     <div className='bg-lime-50 p-5 m-14'>
      <h1 className='text-center font-bold m-2 text-blue-900 text-2xl  '>Simple Steps You Can Take to Reduce {head2}</h1>
      <div className='border w-1/2 mx-auto rounded-lg p-2 my-5 shadow-lg overflow-scroll bg-white' style={{height:500}}>
        {
          ways.map((way,i)=>{
            return(
              <div index={i} className='border p-3 m-5 rounded-lg hover:shadow-slate-500  shadow-md space-x-1'>
                <h1 className='font-extrabold text-lg cormorant-garamond-light  '><span className='text-xs mr-3'>⚫</span>{way}  </h1>
                </div>

            )
          })
        }

      </div>
     </div>
      <Footer />
    </div>
  );
}

export default Prevention;

