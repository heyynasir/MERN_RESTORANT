import React, { useState } from 'react'
import reservation from '../images/reservation.png'
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


function Reservation() {

    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")
    const [phone , setPhone] = useState("")
    const [time , setTime] = useState("")
    const [date , setDate] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const data = await axios.post('https://mern-restorant-1.onrender.com/add',
                {firstName,lastName,email,phone,time,date}
            );
                console.log(data)
                toast.success(data.message)
                setFirstName("")
                setLastName("")
                setEmail("")
                setPhone("")
                setTime("")
                setDate("")
                navigate('/sucess')

        }catch(err){
            console.log(err)
        }
            
    }

  return (
    <div className='w-full md:h-screen h-[170vh] bg-zinc-100 flex md:flex-row flex-col'>
        <div className="md:w-1/2 w-full h-full flex justify-center items-center">
            <img className='w-[80%]' src={reservation} alt="" />
        </div>

        <div className="md:w-1/2 w-full h-full flex justify-center items-center ">
            <div className='w-[80%] md:h-[70vh] md:mb-0 mb-10 h-[100vh] mt-10 bg-white shadow-xl'>
                <h1 className='md:text-[2.2rem] text-[1.5rem] ml-10 md:ml-24 mt-10'>MAKE RESERVATION</h1>
                <p className='md:ml-[10vw] ml-[15vw] md:text-[1rem] text-xs text-zinc-700 font-semibold'>For Further Question, Please Call</p>
                <form className='p-6 flex flex-col gap-3 mt-4 md:px-10' onSubmit={handleSubmit}>
                    <div className='flex md:flex-row flex-col md:gap-0 gap-3 justify-between'>

                        <input className='md:w-[43%] w-full py-2 bg-transparent border-b border-black px-4 outline-none'
                        type="text" required placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                        <input className='md:w-[43%] w-full py-2 bg-transparent border-b border-black px-4 outline-none'
                        type="text" required placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                    </div>

                    <div className='flex  md:flex-row flex-col md:gap-0 gap-3  justify-between'>
                        <input className='md:w-[43%] w-full py-2 bg-transparent border-b border-black px-4 outline-none'
                        type="email" required placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <input className='md:w-[43%] w-full py-2 bg-transparent border-b border-black px-4 outline-none'
                        type="number" required placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    </div>

                    <div className='flex  md:flex-row flex-col md:gap-0 gap-3  justify-between'>
                        <input className='md:w-[43%] w-full py-2 bg-transparent border-b border-black px-4 outline-none'
                        type="date" required placeholder='date' value={date} onChange={(e)=>setDate(e.target.value)} />
                        <input className='md:w-[43%] w-full py-2 bg-transparent border-b border-black px-4 outline-none'
                        type="time" required placeholder='time' value={time} onChange={(e)=>setTime(e.target.value)} />
                    </div>
                    <button type='submit' className='px-6 md:w-[40%] w-[70%] font-semibold mt-6 hover:bg-blue-600
                            duration-500 hover:text-white  mx-auto py-2 flex items-center gap-2 border border-black rounded-full'>
                        <p>Reserve Now</p> <p><FaArrowCircleRight /></p>
                    </button>
          
                </form>

            </div>
        </div>
    </div>
  )
}

export default Reservation