import React from 'react'
import f1 from '../images/chi.jpg'
import f2 from '../images/chick-bir.jpg'
import f3 from '../images/kababaa.jpg'
import f4 from '../images/leg.jpg'
import f5 from '../images/leglines.jpg'
import f6 from '../images/piiiizaa.jpg'
import f7 from '../images/piza2.jpg'
import f8 from '../images/lunch1.png'

const dish = [
    {image:f1 , name:"Chicken"},
    {image:f2 , name:"Chicken Biryani"},
    {image:f3 , name:"Chicken Kabab"},
    {image:f4 , name:"Chicken Legpiece"},
    {image:f5 , name:"Chicken Leglines"},
    {image:f6 , name:"Pizza"},
    {image:f7 , name:"Panir Pizza"},
    {image:f8 , name:"Lunch"},
]

function Foods() {
  return (
    <div className='w-full min-h-screen mb-16 flex flex-col bg-zinc-100'>
        <h1 className='md:pt-[6vw] pt-[18vw] mx-auto md:text-[3rem] text-[2rem]  font-bold'><span className='text-[#2ce0e0]'>OUR </span>
         <span className='text-[red]'>MENU</span></h1>
       <div className='flex md:flex-row flex-col flex-wrap mt-2 items-center justify-evenly gap-4'>
            {
                dish.map((item , i)=>(
                    <div key={i} className="box cursor-pointer hover:bg-zinc-400 duration-500 md:w-[22vw] w-[80vw] md:h-[21vw] h-[50vh] p-6 rounded-md bg-zinc-200 ">
                        <img className='w-full object-cover rounded-md h-[80%]' src={item.image} alt="" />
                        <h1 className='text-[1.3rem] font-semibold text-center mt-2'>{item.name}</h1>
                    </div>
                ))
            }
       </div>
    </div>
  )
}

export default Foods