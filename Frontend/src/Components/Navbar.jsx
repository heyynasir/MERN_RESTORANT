import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";

function Navbar() {

  const [click , setClick] = useState()

  return (
    <nav className='w-full fixed h-[10vh] bg-zinc-100 flex px-10 items-center font-mono text-[1.2rem] uppercase border border-b justify-between'>
        <h1 className='text-[2rem]'>FOODY</h1>
        <div className="links flex md:text-[1rem] text-xs gap-1 md:ml-0 ml-4 md:gap-4">
            <NavLink to='/' className='hover:scale-110 duration-300 hover:text-[red]'>Home</NavLink>
            <NavLink to='/about' className='hover:scale-110 duration-300 hover:text-[red]'>Aboutus</NavLink>
            <NavLink to='/foods' className='hover:scale-110 duration-300 hover:text-[red]'>Foods</NavLink>
            <NavLink to='/reservation' className='hover:scale-110 duration-300 hover:text-[red]'>Reservation</NavLink>
        </div>
       <Link to='/foods'>
        <button className='uppercase hidden md:block px-4 py-1 font-bold border hover:bg-zinc-400 duration-500 border-black rounded-lg'>Our Menu</button>
       </Link>

       
    </nav>
  )
}

export default Navbar