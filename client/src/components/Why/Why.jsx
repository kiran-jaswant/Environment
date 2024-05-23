import React from 'react';
import droplets from './droplets.png';
import { reasons, left } from '../../Config/Why/Why';
import './Why.css';
import earth from './earth.avif';



function Why() {

    return (
        <div className=''>
            <div className='w-full h-96 bg-no-repeat ' style={{ backgroundImage: `url(${droplets})`, marginLeft: 1100 }}>
            </div>
            <div className='text-center  relative bottom-80'>
                <p className='platypi text-slate-500'>Reasons to Choose Us</p>
                <p className='merriweather-sans mt-5 font-extrabold text-blue-900 text-2xl underline-middle'>WHAT WE ARE DOING</p>
                <div className='flex justify-around flex-wrap mx-40 mt-20  '>
                    {
                        reasons.map((reason, index) => {
                            const { logo, heading, description } = reason;
                            return (
                                <div index={index} className='  '>
                                    <div className='w-96 p-3'>
                                        <img src={logo} className='w-16 mx-auto drop-shadow-lg'></img>
                                        <h1 className='text-center text-lg m-4 mt-5 merriweather-sans font-extrabold '>{heading}</h1>
                                        <p className='cormorant-garamond-light m-4 text-slate-600'>{description}</p>
                                    </div>

                                </div>

                            )

                        })
                    }
                </div>

            </div>

            <div>
                <div className='text-center -mt-48'>
                    <p className='platypi text-slate-500 '>Understand Need to Save Earth</p>
                    <h1 className='merriweather-sans mt-5 font-extrabold text-blue-900 text-2xl underline-middle '>Earth is God's Precious Gift</h1>
                </div>
                <div className='flex justify-around mx-12 mt-24'>
                    <div className='flex flex-col'>
                    {
                        left.map((point, index) => {
                            const{head,content}=point;
                            return (
                                <div className='w-80 mt-7'>
                                    <h1 className='text-center merriweather-sans'>{head}</h1>
                                    <p className='cormorant-garamond-light text-slate-500'>{content}</p>
                                    

                                </div>
                            )

                        })
                    }
                    </div>
                    <div>

                        <img className='rotate  mt-3' src={earth} alt='img' />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Why;
