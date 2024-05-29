import React from 'react'

function Rewardcard(props) {
    const { img, activity, rewards } = props;
    return (
        <div className='border-2 border-blue-950 w-96 m-7 rounded-lg  cursor-pointer shadow-2xl'>
            <img src={img} className='w-96 h-52 mx-auto object-cover rounded-t-lg'></img>
            <h1 className='text-center text-lg font-bold m-3 text-blue-900'>{activity}</h1>
            {
                rewards.map((reward) => {
                    return (
                        <div>
                            <p className='cormorant mx-2 p-2'>🎁{reward}</p>

                        </div>
                    )

                })
            }

        </div>
    )
}

export default Rewardcard
