import React from 'react';
import droplets from './droplets.png';
import { reasons } from '../../Config/Why/Why';




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

            
        </div>
    )
}

export default Why;
