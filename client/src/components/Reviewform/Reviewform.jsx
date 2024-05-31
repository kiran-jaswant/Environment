import React, { useState } from 'react';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log({ name, email, review });
    // Reset form fields
    setName('');
    setEmail('');
    setReview('');
  };

  return (
   <div className='flex justify-center mx-20'>
     <div className=" mx-5  my-5 border rounded-2xl p-16 w-1/2 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Write a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="review" className="block mb-1">
            Your Review:
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-900 text-white px-5 py-3 rounded-md mx-auto hover:bg-blue-800"
        >
          Submit Review
        </button>
      </form>
      
    </div>
    <div className='border rounded-2xl p-4 mx-5 my-5 w-1/2 shadow-lg'>
    <h2 className="text-xl font-semibold mb-6 text-center my-10">Your Opinion Matter Alot To Us</h2>
        <h1 className='text-center m-3 font-bold'>
            
        </h1>
    </div>
   </div>
  );
};

export default ReviewForm;
