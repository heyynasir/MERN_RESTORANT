import React from 'react'
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'

const Services = () => {
  return (
   <>    
    <div className='w-full bg-zinc-100 md:h-screen h-[150vh]   justify-center items-center '>
        <h1 className='md:text-[3rem] text-[2rem] md:ml-[42%] ml-28 h-[1vh] md:pt-[7vw] mt-[14vw] font-semibold'>SERVICES</h1>

         <div className='w-full h-[90vh] flex md:flex-row flex-col gap-10 justify-evenly items-center'>
         <div className="left md:w-[30vw] md:mt-0 mt-16 w-[80vw] bg-zinc-300 rounded-lg shadow-lg cursor-pointer hover:bg-zinc-400 duration-500 h-[50vh] p-6 flex flex-col justify-center items-center">
                    <img className='w-[30%]' src={s1} alt="" />
                    <h1 className='text-xl font-semibold'>QUALITY FOOD</h1>
                    <p className='w-[85%] leading-none mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Fugiat reiciendis molestias, in ullam atque neque!</p>
                </div>
                
                <div className="left md:w-[30vw] w-[80vw] bg-zinc-300 rounded-lg shadow-lg cursor-pointer hover:bg-zinc-400 duration-500 h-[50vh] p-6 flex flex-col justify-center items-center">
                    <img className='w-[30%]' src={s3} alt="" />
                    <h1 className='text-xl font-semibold'>SUPER TASTE</h1>
                    <p className='w-[85%] leading-none mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Fugiat reiciendis molestias, in ullam atque neque!</p>
                </div>
                
                <div className="left md:w-[30vw] w-[80vw] bg-zinc-300 rounded-lg shadow-lg cursor-pointer hover:bg-zinc-400 duration-500 h-[50vh] p-6 flex flex-col justify-center items-center">
                    <img className='w-[30%]' src={s2} alt="" />
                    <h1 className='text-xl font-semibold'>FAST DELIVERY</h1>
                    <p className='w-[85%] leading-none mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Fugiat reiciendis molestias, in ullam atque neque!</p>
                </div>
        </div>
            
    </div>
   </>
  )
}

export default Services