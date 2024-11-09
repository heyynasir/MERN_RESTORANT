import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Reservation from './Pages/Reservation'
import Foods from './Pages/Foods'
import NotFound from './Pages/NotFound'
import Sucess from './Pages/Sucess'

function App() {

  return (
    <div>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/foods' element={<Foods />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/sucess' element={<Sucess />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App