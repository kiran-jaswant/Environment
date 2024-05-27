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
     <div className='m-14 '>
     <h1 className="text-2xl font-bold text-center p-6 text-blue-900">{head}</h1>
     <div className=" mx-24 flex p-3 justify-between ">
        
        <div className='border-2 p-8 rounded-md  hover:cursor-pointer hover:shadow-md ' style={{width:720}}>
          <h1 className='font-bold text-green-800'>Why it is necessary ?</h1>
        <p className="text-base text-gray-700 mt-5" >{description}</p>

        </div>
        
        <div>
        <img src={img}  className="w-96 h-96 rounded-2xl shadow-2xl" />
        </div>
      
        
      </div>
     </div>
     <div>
      <h1 className='text-center font-bold m-2 text-blue-900 text-2xl  '>Simple Steps You Can Take to Reduce {head2}</h1>
      <div className='border h-96 w-1/2 mx-auto rounded p-2 my-5 shadow-lg overflow-scroll'>
        {
          ways.map((way,i)=>{
            return(
              <div index={i} className='border p-3 m-5 rounded-lg hover:shadow-slate-500  shadow-md space-x-1'>
                <h1 className='text-bold cormorant-garamond-light '><span className='text-xs'>⚫</span>{way}  </h1>
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

