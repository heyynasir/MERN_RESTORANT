import React from 'react'
import logo from '../images/logo.png'
import { FaArrowDown } from "react-icons/fa";
import bg from '../images/burger.png'

function Hero() {
  return (
    <div className='w-full md:h-[100vh] h-[120vh] pt-20 bg-zinc-100 flex md:flex-row flex-col'>
        <div className="left md:w-[40vw] w-full md:h-full h-screen flex flex-col leading-none items-center ">
            <h1 className='md:text-[6rem] text-[4rem] mt-16 font-bold'>Delicious</h1>
            <div className='flex md:w-[20vw] md:ml-0 ml-[-40vw] w-[25vw] items-center'><img src={logo} alt="" /><p className='md:text-[5rem] text-[4rem] mb-10 font-semibold'>ood</p></div>
            <h1 className='md:text-[5rem] text-[4rem] ml-[35vw] md:ml-[18vw] mt-[-10vw] md:mt-[-4vw] font-bold'>Dishes</h1>
            <button className='px-6 md:py-3 py-2 rounded-md mt-6 flex items-center gap-2 bg-orange-600 font-semibold text-white text-[1.2rem]'>
                Explore <p className='mt-1'><FaArrowDown /></p></button>
        </div>
        <div className="right md:w-[60vw] md:mt-0 mt-6 md:mb-0 mb-6 w-full h-full flex justify-center items-center">
        <img className='md:w-[70vw] w-[100vw]' src={bg} alt="" />
        </div>
    </div>
  ) 
}

export default Hero