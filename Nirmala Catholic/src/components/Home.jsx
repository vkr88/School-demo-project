import React from 'react'
import Navbar from './navbar/Navbar'
import HomeMain from './HomeMain'
import Toperand_gift from './Toperand_gift'
import Slider1 from './ImageSleder/Slider1'
import Contect_Me from './Contect_Me'
import Gallery from './Gallery/Gallery'
import All_Teacher from './All_Teacher'
import Comment1 from './Comments/Comment1'
const Home = () => {
  return (
    <>
      <div className='bg-gray-100 overflow-hidden'>

        <Slider1></Slider1>
        <HomeMain></HomeMain>
        <All_Teacher></All_Teacher>
        <Toperand_gift></Toperand_gift>
        <Comment1></Comment1>

      </div>
    </>
  )
}

export default Home