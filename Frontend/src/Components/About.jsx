import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import aboutimg from '../images/about.png'
import aboutimg2 from '../images/about2.png'

function About() {
  return (
    <>
        <div className='w-full md:h-screen h-[120vh] flex md:flex-row flex-col bg-zinc-100 pt-10'>
            <div className="left md:w-[55vw] w-full h-full md:p-20">
                <div className='ml-10'>
                        <h1 className='md:text-[3rem] text-[2.5rem] font-semibold mt-12'>ABOUT US</h1>
                        <h3 className='md:text-[1rem] text-sm'>The only thing we're serious about is food.</h3>
                        <p className='md:mt-14 mt-8 md:text-[1rem] text-xs w-[90%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officiis esse sequi
                            quisquam? Soluta asperiores laborum at voluptas repellat 
                            vitae recusandae vel deserunt, natus amet! Quam neque delectus animi quidem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officiis esse sequi
                            quisquam? Soluta asperiores laborum at voluptas repellat.
                        </p>
                        <button className='flex items-center hover:bg-zinc-400 duration-500 px-4 py-2 border border-black rounded-full font-semibold gap-2 mt-10'>
                            <p>Explore Now</p>
                            <p><FaArrowAltCircleRight /></p>
                        </button>
                </div>
            </div>
            <div className="left md:w-[45vw] w-[90%] h-full">
                <img className='w-[90%] md:ml-0 ml-8 mt-10' src={aboutimg} alt="" />
            </div>
            
        </div>


        <div className='flex md:flex-row flex-col justify-evenly bg-zinc-100'>
            <div className="left md:w-[30vw] w-[full] h-screen flex flex-col gap-4 md:gap-0 md:justify-evenly items-center">
                <div className="up flex flex-col md:justify-evenly md:gap-0 gap-6 items-center">
                    <h1 className='text-[5rem] md:mt-0 mt-[30vw]'>14</h1>
                    <p className='text-zinc-800 md:mt-0 mt-[-10vw]'>Restourants</p>
                </div>
                <div className="down">
                    <h1 className='text-[5rem]'>20</h1>
                    <p className='text-zinc-800'>Chef In Kitchens</p>
                </div>
            </div>
            <div className="center md:w-[30vw] w-[70vw]  md:ml-0 ml-14 flex items-center h-[50vh] md:h-screen ">
                <img className='md:mt-0 mt-[-30vw]' src={aboutimg2} alt="" />
            </div>
            <div className="left md:w-[30vw] w-full h-screen flex flex-col md:justify-evenly md:gap-0 gap-6 items-center">
                <div className="up flex flex-col items-center">
                    <h1 className='text-[5rem]'>03</h1>
                    <p className='text-zinc-800 '>Years Of Experiance</p>
                </div>
                <div className="down flex flex-col  items-center">
                    <h1 className='text-[5rem]'>60+</h1>
                    <p className='text-zinc-800'>Food Dishes</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About