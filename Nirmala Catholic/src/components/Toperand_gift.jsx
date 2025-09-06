import React from 'react'
import boy1 from '../assets/image/boy1.jpg'
import boy2 from '../assets/image/boy2.jpg'
import boy3 from '../assets/image/boy3.avif'
import boy4 from '../assets/image/boy4.jpg'
import girl1 from '../assets/image/girl1.jpg'
import girl2 from '../assets/image/girl2.jpg'
import girl3 from '../assets/image/girl3.jpg'
const Toperand_gift = () => {
  return (
    <div className='p-6'>
      <div className='p-6 border-green-500 border-2 flex justify-around flex-col items-center w-full'>
        <p className='text-2xl font-bold text-green-500 mb-5'> Toper Student...</p>
        <div className='w-full'>
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

    </div >
  )
}

export default Toperand_gift
