import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import Team from '../Components/Team'

function Home() {
  return (
    <div>
        {/* <Navbar /> */}
        <Hero />
        {/* <About /> */}
        <Services />
        <Team />
    </div>
  )
}

export default Home