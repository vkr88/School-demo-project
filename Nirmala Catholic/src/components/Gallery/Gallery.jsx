import React from 'react';
import allImage from './Store';
import Navbar from '../navbar/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
const Gallery = () => {
   const location = useLocation();
        const navigate = useNavigate();
    const fullImage =()=>
    {
      
       navigate(`/fullimage/${i}`, { state: { image: img } });
    }
  return (
    <>    
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {allImage.map((item, i) => {
        return (
          <img key={i}src={item}alt={`Person ${i + 1}`} onClick={() => fullImage(item, i)}
            className='w-62 h-62 object-cover rounded-md border border-gray-300 cursor-pointer ' />
        );
      })}
    </div>
    </>
  );
};

export default Gallery;
