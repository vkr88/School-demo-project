import React from 'react'
import boy1 from '../assets/image/boy1.jpg'
import boy2 from '../assets/image/boy2.jpg'
import boy3 from '../assets/image/boy3.avif'
import boy4 from '../assets/image/boy4.jpg'
import girl1 from '../assets/image/girl1.jpg'
import girl2 from '../assets/image/girl2.jpg'
import girl3 from '../assets/image/girl3.jpg'
import principal from '../assets/image/principal.jpeg'
const All_Teacher = () => {
  return (
    <div className='p-6'>

      <div className='flex justify-center items-center flex-col md:flex-row mb-10'>


        <div className='h-72 w-60 border-2 border-green-600 rounded-lg shadow-xl shadow-green-500 flex justify-center items-center flex-col md:m-20'> <img src={principal} alt="" className='h-62 object-cover' />  <p className='text-lg font-semibold text-green-600 mt-1'>Gyan Srivastava</p></div>
        <div className=' flex justify-center  flex-col md:w-1/2'>
          <div className='text-4xl font-semibold text-green-600 mt-15'>Message from the Principal...</div>
          <div>
            <p className='text-lg font-semibold text-green-600 mt-6 '>Dear Parents & Students ,</p>
            <p className='text-lg text-green-600 mt-1 mb-10 text-justify'>
              I extend a warm welcome to all members of the SRM Public School community, both returning
              and new. As we embark on another academic year filled with promise and opportunity,
              I am filled with a sense of pride in our collective achievements and anticipation for
              the growth and success that lies ahead. At SRM Public School, we are committed to
              nurturing young minds, fostering creativity, and instilling
              values that prepare our students to excel in an ever-changing world.
            </p>

          </div>
        </div>
      </div>
      <div className=' border-2 border-green-500 p-10 w-full'>


        <p className=' text-2xl text-green-500 font-bold justify-center w-full flex mb-10'>All Teacher Member...</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 place-items-center'>
          <div className='h-72 w-60 border-2 border-green-600 rounded-lg shadow-xl shadow-green-500 flex flex-col items-center overflow-hidden'>
            <img src={boy1} alt="mandeep kumar" className='object-cover h-62 w-full' />
            <p className='text-lg font-semibold text-green-600 mt-1'>mandeep kumar</p>
          </div>
          <div className='h-72 w-60 border-2 border-green-600 rounded-lg shadow-xl shadow-green-500 flex flex-col items-center overflow-hidden'>
            <img src={boy2} alt="mandeep kumar" className='object-cover h-62 w-full' />
            <p className='text-lg font-semibold text-green-600 mt-0'>mandeep kumar</p>
          </div>
          <div className='h-72 w-60 border-2 border-green-600 rounded-lg shadow-xl shadow-green-500 flex flex-col items-center overflow-hidden'>
            <img src={girl1} alt="mandeep kumar" className='object-cover h-62 w-full' />
            <p className='text-lg font-semibold text-green-600 mt-0'>mandeep kumar</p>
          </div>
          <div className='h-72 w-60 border-2 border-green-600 rounded-lg shadow-xl shadow-green-500 flex flex-col items-center overflow-hidden'>
            <img src={boy3} alt="mandeep kumar" className='object-cover h-62 w-full' />
            <p className='text-lg font-semibold text-green-600 mt-0'>mandeep kumar</p>
          </div>
          <div className='h-72 w-60 border-2 border-green-600 rounded-lg shadow-xl shadow-green-500 flex flex-col items-center overflow-hidden'>
            <img src={girl2} alt="mandeep kumar" className='object-cover h-62 w-full' />
            <p className='text-lg font-semibold text-green-600 mt-0'>mandeep kumar</p>
          </div>
          <div className='h-72 w-60 border-2 border-green-600 rounded-lg shadow-xl shadow-green-500 flex flex-col items-center overflow-hidden'>
            <img src={boy4} alt="mandeep kumar" className='object-cover h-62 w-full' />
            <p className='text-lg font-semibold text-green-600 mt-0'>mandeep kumar</p>
          </div>
          <div className='h-72 w-60 border-2 border-green-600 rounded-lg shadow-xl shadow-green-500 flex flex-col items-center overflow-hidden'>
            <img src={girl3} alt="mandeep kumar" className='object-cover h-62 w-full' />
            <p className='text-lg font-semibold text-green-600 mt-0'>mandeep kumar</p>
          </div>
          <div className='h-72 w-60 border-2 border-green-600 rounded-lg shadow-xl shadow-green-500 flex flex-col items-center overflow-hidden'>
            <img src={boy1} alt="mandeep kumar" className='object-cover h-62 w-full' />
            <p className='text-lg font-semibold text-green-600 mt-0'>mandeep kumar</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default All_Teacher
