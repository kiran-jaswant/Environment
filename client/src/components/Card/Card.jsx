import React from 'react';
import { card } from '../../Config/Carddetils/Carddetails'


function Card() {
  return (
    <div>
      <div className='flex mx-20'>
        {
          card.map((detail, index) => {
            const { img, head, description } = detail;
            return (
              <div className='border border-solid w-60 m-10 bg-green-50 rounded-xl border-green-500 '>
                <div className='text-green-950'>
                  <img src={img}></img>
                  <h1>{head}</h1>
                  <p>{description}</p>
                  <div className='bg-green-500 m-0 rounded-bl-xl rounded-br-xl p-3 hover: '>
                    <p className=''>Read More</p>
                  </div>
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
