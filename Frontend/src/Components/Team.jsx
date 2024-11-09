import React from 'react'
import e1 from '../images/e1.png'
import e2 from '../images/e2.png'
import e3 from '../images/e3.png'
import e4 from '../images/e4.png'

const team = [
    {image:e1 , name:"JOHNTHAN TAYLER" , role:"Founder & Head Chef"},
    {image:e2 , name:"HARRY POTTER" , role:"Fast Food Chef"},
    {image:e3 , name:"ALEX ZAYN" , role:"Indian Food Chef"},
    {image:e4 , name:"JOS BUTLER" , role:"Senior Chef"},
]

function Team() {
  return (
    <div className='w-full md:h-[100vh] h-[170vh] bg-zinc-100'>
        <div className='flex justify-center w-full'><h1 className='mt-10 text-[2rem] md:text-[3.3rem]  font-semibold'>OUR TEAM</h1></div>
        <div className="div flex md:flex-row items-center flex-col justify-evenly mt-10 md:mt-16">
           {
            team.map((item , index)=>(
                <div key={index} className="team md:w-[22vw] w-[70vw] hover:bg-zinc-300 duration-700 
                hover:shadow-lg rounded-lg cursor-pointer md:h-[22vw] h-[35vh] flex flex-col justify-center items-center">
                        <img className='w-[10vw]' src={item.image} alt="" />
                        <h1 className='text-xl font-semibold'>{item.name}</h1>
                        <p className='text-zinc-700'>{item.role}</p>
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default Team