import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className='w-full flex justify-end '>
                <div className='flex bg-slate-200 justify-around w-full md:h-20 h-15 pl-4'>
                    {/* Logo & Title */}
                    <div className='flex items-center'>
                        <div className='border-2 rounded-full md:h-17 md:w-17 w-14 h-14 border-green-500 ml-[-20px] items-center flex justify-center'>ls</div>
                        <div className='pl-2'>
                            <div className='font-bold md:text-4xl text-2xl'>
                                <span className='text-green-600'>VIKASH</span> <span className='text-green-600'>KUMAR</span>
                            </div>
                            <p>School Goparlganj Bihar</p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className='md:flex w-1/2 justify-center items-center ml-60 hidden'>
                        <ul className='flex justify-evenly w-full text-xl'>
                            <li className='h-10 w-20 flex justify-center items-center rounded-sm hover:bg-green-500 text-green-500 hover:text-black font-bold'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='h-10 w-20 flex justify-center items-center rounded-sm hover:bg-green-500 text-green-500 hover:text-black font-bold'>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                             <li className='h-10 w-20 flex justify-center items-center rounded-sm hover:bg-green-500 text-green-500 hover:text-black font-bold'>
                                <Link to="/contect">Contect</Link>
                            </li>
                            <li className='h-10 w-20 flex justify-center items-center rounded-sm hover:bg-green-500 text-green-500 hover:text-black font-bold'>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Icon */}
                    <div className='md:hidden'>
                        {!show && (
                            <p onClick={() => setShow(true)}>
                                <AiOutlineBars className='text-4xl mt-2 text-green-500' />
                            </p>
                        )}
                    </div>
                </div>

                {/* Mobile Sidebar */}
                {show && (
                    <div className='md:hidden bg-green-500 w-2/3 rounded-lg h-screen top-0 fixed z-20'>
                        <div className='justify-end flex mr-2'>
                            <IoCloseSharp onClick={() => setShow(false)} className='text-4xl mt-2 text-black' />
                        </div>
                        <ul className='flex flex-col text-xl pl-1 py-10'>
                            <li className='h-10 flex justify-center items-center rounded-sm bg-amber-200 m-2'>
                                <Link to="/" onClick={() => setShow(false)}>Home</Link>
                            </li>
                            <li className='h-10 flex justify-center items-center rounded-sm bg-amber-200 m-2'>
                                <Link to="/gallery" onClick={() => setShow(false)}>Gallery</Link>
                            </li>
                            <li className='h-10 flex justify-center items-center rounded-lg bg-amber-200' > <Link to='/contect' onClick={()=> setShow(false)}>Contect</Link> </li>
                            <li className='h-10 flex justify-center items-center rounded-sm bg-amber-200 m-2'>
                                <Link to="/about" onClick={() => setShow(false)}>About</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
