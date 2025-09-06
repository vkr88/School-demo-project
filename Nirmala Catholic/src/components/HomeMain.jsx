import React from 'react'
import { Link } from 'react-dom'
import { FaBullhorn, FaBook, FaChalkboardTeacher, FaUserGraduate, FaLaptopCode, FaTrophy, FaSchool, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
//news
const newsList = [
  { icon: <FaBullhorn />, text: 'Admissions open for 2025-26 session.' },
  { icon: <FaBook />, text: 'New library books have been added.' },
  { icon: <FaChalkboardTeacher />, text: 'Guest lecture by IIT Professor this week.' },
  { icon: <FaUserGraduate />, text: 'Graduation ceremony on 22nd July.' },
  { icon: <FaLaptopCode />, text: 'Inter-school coding competition announced.' },
  { icon: <FaTrophy />, text: 'Won district-level science quiz.' },
  { icon: <FaSchool />, text: 'Campus renovation work completed.' },
  { icon: <FaClock />, text: 'New school timings: 8:00 AM - 2:00 PM.' },

];


const notices = [
  {
    title: 'Mid-Term Exams Start from 20th July',
    date: '12 July 2025',
  },
  {
    title: 'Fee Submission Last Date: 18th July',
    date: '10 July 2025',
  },
  {
    title: 'New Library Timings: 9 AM to 4 PM',
    date: '8 July 2025',
  },
  {
    title: 'Science Fair Registration Open',
    date: '5 July 2025',
  },
  {
    title: 'Summer Vacation Ends on 15th July',
    date: '1 July 2025',
  },
];
//import router from 'react-router-dom'
const HomeMain = () => {
  return (
    <>

      <div className='w-full flex flex-wrap justify-around md:p-15 p-8 gap-5'>



        <div className='md:w-1/4 w-full border-green-600 border-2 rounded-lg h-140 md:h-[600px]'>

          <div className='bg-green-600 w-full h-12 justify-center items-center flex'>
            <p className='text-2xl font-bold'>Notice Boards...</p>
          </div>
          <div className='p-5'>

            <ul className="space-y-3">
              {notices.map((notice, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 border-b pb-2 hover:text-green-600 transition-all cursor-pointer"
                >
                  <span className="text-green-500 mt-1 text-lg">
                    <FaBell />
                  </span>
                  <div>
                    <p className="font-medium">{notice.title}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <FaCalendarAlt className="mr-1" />
                      <span>{notice.date}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
<div className='md:w-1/4 w-full border-green-600 border-2 rounded-lg h-140 md:h-[600px] shadow-xl/30'>
          <div className='bg-green-600 w-full h-12 justify-center items-center flex'>
            <p className='text-2xl font-bold text-white'>Campus News...</p>
          </div>
          <div className='p-5'>

            <ul className="space-y-3">
              {newsList.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-all cursor-pointer">
                  <span className="text-green-500 text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>


          </div>
        </div>

      </div>
    </>
  )
}

export default HomeMain