import React from 'react'
import notFound from '../images/notFound.png'

function NotFound() {
  return (
    <div className='w-full flex justify-center items-center h-screen'>
        <img className='md:w-full w-[80vw]' src={notFound} alt="" />
    </div>
  )
}

export default NotFound