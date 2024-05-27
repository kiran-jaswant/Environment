import React from 'react';
import { left, right } from '../../Config/Why/Why';
import './Earth.css';
import earth from './earth.avif';

function Earth() {
  return (
    <div>
        <div>
                <div className='text-center -mt-32'>
                    <p className='platypi text-slate-500 '>Understand Need to Save Earth</p>
                    <h1 className='merriweather-sans mt-5 font-extrabold text-blue-900 text-2xl underline-middle '>Earth is God's Precious Gift</h1>
                </div>
                <div className='flex justify-around mx-24 mt-24'>
                    <div className='flex flex-col'>
                        {
                            left.map((point, index) => {
                                const { head, content } = point;
                                return (
                                    <div className='w-80 mt-7' index={index}>
                                        <h1 className='text-center merriweather-sans text-green-800 font-extrabold'>{head}</h1>
                                        <p className='cormorant-garamond-light text-slate-500 text-justify'>{content}</p>


                                    </div>
                                )

                            })
                        }
                    </div>
                    <div>

                        <img className='rotate  mt-24 w-72 h-72' src={earth} alt='img' />

                    </div>

                    <div className='flex flex-col'>
                        {
                            right.map((point, index) => {
                                const { head, content } = point;
                                return (
                                    <div className='w-80 mt-7' index={index}>
                                        <h1 className='text-center merriweather-sans text-green-800 font-extrabold'>{head}</h1>
                                        <p className='cormorant-garamond-light text-slate-500 text-justify'>{content}</p>


                                    </div>
                                )

                            })
                        }
                    </div>

                </div>
            </div>
      
    </div>
  )
}

export default Earth;
