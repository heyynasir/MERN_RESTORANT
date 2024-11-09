import React from 'react'

const Footer = () => {
  return (
    <div className='w-full md:h-[40vh] h-[60vh]  bg-zinc-300 flex md:flex-row flex-col justify-evenly items-center'>
        <div className=''>
           <h1 className='text-xl font-semibold'>Company</h1>
           <p>Foody</p>
           <p>carrier</p>
           <p>Team</p>
           <p>tasty</p>
        </div>
        <div className='hidden md:block '>
           <h1 className='text-xl font-semibold'>Contact</h1>
           <p>Foody@gmail.com</p>
           <p>+91-8986782920</p>
           <p>+91-220099</p>
        </div>
        <div className=''>
           <h1 className='text-xl font-semibold'>Available</h1>
           <p>Nipani</p>
           <p>Tavandi</p>
           <p>Yamgarni</p>
           <p>Shirguppy</p>
        </div>
        <div className='hidden md:block '>
           <h1 className='text-xl font-semibold'>Startup</h1>
           <p>Verified</p>
           <p>multiple</p>
           <p>Foody</p>
           <p>branding</p>
        </div>

    </div>
  )
}

export default Footer