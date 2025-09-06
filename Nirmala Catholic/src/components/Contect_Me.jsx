import React from 'react'
import { useForm } from "react-hook-form";
import api from './api';
import { useState } from 'react';
const Contect_Me = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const [contectInfo, setContectInfo] = useState([]);

  const onSubmit = async (data) => {
    console.log("Form Input Data:", data);
    try {
      const res = await api.post('/contect', {
        Full_Name: data.Full_Name,
        email: data.email,
        Number: data.Number,
        message: data.message

      });

      setContectInfo(prev => [res.data, ...prev]); // prepend new comment
    } catch (err) {
      console.error('Failed to post comment:', err);
    }
  };
  return (

    <>
      <div className='w-full justify-center flex items-center mt-10 p-5'>
        <div className='border-green-500 border-2 md:w-1/3  flex flex-col rounded-lg p-5 w-full'>
          <p className='w-full justify-center flex text-2xl font-bold text-green-500 mb-5'>Contect me...</p>


          <form action="" className='w-full justify-center items-center flex '
            onSubmit={handleSubmit((onSubmit))}>
            <div className='flex flex-col w-full'>



              <p className='font-semibold text-lg text-green-500'>Full Name...</p>
              <input type="text" placeholder='Full Name' className='h-10  outline-green-500 
                             border-green-500 border-2 bg-white rounded-lg pl-3 text-green-500 ' name='Full_Name'
                {...register("Full_Name", { required: "Full Name" })} />
              {errors.Full_Name && <p className="text-red-500 text-sm mt-1">This field is required</p>}

              <p className='font-semibold text-lg text-green-500 mt-4 '>Mobile N0...</p>
              <input type="number" placeholder='Mobile' className='h-10  outline-green-500  border-green-500 border-2
               bg-white rounded-lg pl-3 text-green-500'    {...register("Number", { required: "Number is required" })} />
              {errors.Number && (<p className="text-red-500 text-sm mt-1">{errors.Number.message}</p>)}

              <p className='font-semibold text-lg text-green-500 mt-4' >Email...</p>
              <input
                type="email"
                placeholder="Email"
                className="h-10 outline-green-500 border-green-500 border-2 bg-white rounded-lg pl-3 text-green-500"
                name="email"
                {...register("email", { required: "Email is required" })} />
              {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
              <p className='font-semibold text-lg text-green-500 mt-4'>Massege...</p>


              <textarea
                placeholder='Type your message...'
                className='h-20 outline-green-500 border-green-500 border-2 bg-white rounded-lg pl-3 pt-2 text-green-500 resize-none'
                {...register("message", { required: "Message is required" })}
              />
              <input type="submit" className='bg-green-500 h-11 rounded-lg mt-5 cursor-pointer' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contect_Me