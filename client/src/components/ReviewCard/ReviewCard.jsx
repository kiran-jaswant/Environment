import React from 'react';
import start from './start.png';
import end from './end.png';


function ReviewCard(props) {
    const { photo, view, name } = props;
    return (
        <div className='border-none bg-lime-50 flex p-4 m-5 justify-between ' style={{ width: 640 }}>
            <img src={photo} className='rounded-full shadow-2xl w-20 h-20 mt-3' style={{ boxShadow: "0 0 25px rgba(0, 0, 0, 0.5)" }}
            ></img>
            <div className='mx-7 my-3'>
                <img src={start} className='w-4 inline -mt-5 mx-1'></img>
                <p className='cormorant-garamond-light text-justify text-slate-700 inline mx-5' style={{ fontSize: 17 }}>{view}</p>
                <img src={end} className='w-4 inline '></img>
                <p className='mt-3 ml-1 font-bold text-slate-700'>  - {name}</p>
            </div>

        </div>
    )
}

export default ReviewCard;
