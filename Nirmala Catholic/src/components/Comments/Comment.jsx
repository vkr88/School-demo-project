import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import api from '../api.js'

const Comment = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const [comments, setComments] = useState([]);
    const [seemore, setSeemore] = useState(false);

    useEffect(() => {
        api.get('/comments')
        .then(res => setComments(res.data))
        .catch(error => console.error(error));
    }, []);
    


    const visibleComments = seemore ? comments : comments.slice(0, 6);

    const handleSeeMore = () => {
        setSeemore(!seemore);
         
    };

    const onSubmit = async (data) => {
         console.log("Form Input Data:", data);
        try {
            const res = await api.post('/comments', {
                name: data.name,
                email: data.email,
                comment: data.comment
                
            });

            setComments(prev => [res.data, ...prev]); // prepend new comment
        } catch (err) {
            console.error('Failed to post comment:', err);
        }
    };
 

    return (
        <>
            <div>
                <div className='w-full justify-center flex items-center mt-10 p-5'>

                    <form action="" className='w-full justify-center items-center flex '
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className='border-green-500 border-2 md:w-1/3  flex flex-col rounded-lg p-5 w-full'>
                            <p className='w-full justify-center flex text-2xl font-bold text-green-500 mb-5 '>Comment...</p>


                            <p className='font-semibold text-lg text-green-500'>Full Name...</p>
                            <input type="text" placeholder='Full Name' className='h-10  outline-green-500 
                             border-green-500 border-2 bg-white rounded-lg pl-3 text-green-500 ' name='FullName'
                                {...register("Full_Name", { required: true, maxLength: 10 })} />
                            {errors.name && <p>This field is required</p>}


                            <p className='font-semibold text-lg text-green-500 mt-4' >Email...</p>
                            <input
                                type="email"
                                placeholder="Email"
                                className="h-10 outline-green-500 border-green-500 border-2 bg-white rounded-lg pl-3 text-green-500"
                                name="email"
                                {...register("email", { required: "Email is required" })} />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                            <p className='font-semibold text-lg text-green-500 mt-4'>Massege...</p>


                            <textarea
                                placeholder='Type your message...'
                                className='h-20 outline-green-500 border-green-500 border-2 bg-white rounded-lg pl-3 pt-2 text-green-500 resize-none'
                                {...register("comment", { required: "Message is required" })}
                            />
                            <input type="submit" className='bg-green-500 h-11 rounded-lg mt-5 cursor-pointer' />
                        </div>
                    </form>

                </div>
                <div className='border-2 border-green-500 md:m-10 m-2 rounded-lg items-center justify-center flex flex-col'>

                    <p className=' text-3xl text-green-500 font-bold  flex mt-5'>All Comments</p>
                    <div className='  p-5 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 '>

                        {visibleComments.map((item, index) => {
                            return (
                                <div key={index} className=' flex flex-col  m-6'>
                                    <p className='text-xl text-green-500'>{item.name}</p>
                                    <p>{item.message}</p>

                                </div>
                            )
                        })}
                    </div>


                    {comments.length > 3 && (
                        <button
                            onClick={handleSeeMore}
                            className='mt-4 text-black underline cursor-pointer bg-green-500 rounded-lg p-1 mb-1'
                        >
                            {seemore ? 'See less' : 'See more'}
                        </button>
                    )}

                </div>

            </div>
        </>
    )
}

export default Comment