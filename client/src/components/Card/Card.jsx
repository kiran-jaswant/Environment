import React from 'react';
import { Link } from 'react-router-dom';
import { card } from '../../Config/Carddetils/Carddetails';


function Card() {
  return (
    <div>
      <div className='flex mx-12'>
        {
          card.map((detail, index) => {
            const { id, img, head, description } = detail;
            return (
              <div className='border border-solid w-80 m-10 bg-green-50 rounded-xl border-green-950 shadow-md ' index={index}>
                <div className='text-green-950 '>
                  <div className='p-3 '>
                    <div className='flex m-2 px-1'>
                      <img src={img} className='w-12 skew-x-3 hover:animate-bounce duration-100 transition'></img>
                      <h1 className='text-base mt-2 ml-1 font-semibold'>{head}</h1>

                    </div >
                    <div className='h-40 mt-3'>
                      <p className='cormorant-garamond-light text-base p-2 text-gray-600 '>{description}</p>
                    </div>
                  </div>

                </div>
                <div className='bg-green-500 m-0  rounded-bl-xl rounded-br-xl p-3 hover:bg-gradient-to-r  hover:from-green-800  hover:to-green-600 hover:duration-75'>
                  <Link to={`/Preventions/${id}`}><p className='text-white font-semibold cursor-pointer'>Read More</p></Link>
                </div>


              </div>
            )

          })

        }

      </div>


    </div>
  )
}

export default Card; 