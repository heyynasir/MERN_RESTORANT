import React, { useEffect, useState } from 'react'
import success from '../images/sucess.png'
import { Link, useNavigate } from 'react-router-dom'

function Sucess() {

    const [timer , setTimer] = useState(10)
    const navigate = useNavigate()

    useEffect(()=>{
        const timeout = setInterval(()=>{
            setTimer((count)=>{
                if(count === 1){
                    clearInterval(timeout)
                    navigate("/")
                }
                return count - 1;
            })
        },1000)
        return ()=> clearInterval()
    } , [navigate])

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <img className='md:w-[20vw] w-[50vw]' src={success} alt="" />
        <h1>Redirecting to Home {timer} seconds...</h1>
        <Link to='/' className='px-6 py-2 border border-black rounded-full font-semibold mt-4'>Back To Home</Link>
    </div>
  )
}

export default Sucess