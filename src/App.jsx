import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './Componenets/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Events from './Pages/Events'
import Gallery from './Pages/Gallery'
import Sponsers from './Pages/Sponsers'
import NotFound from './Pages/NotFound'
import Footer from './Componenets/Footer'
import Background from './Componenets/Background'




function App() {

  return (
    <div className='flex flex-col min-h-screen orbitron'>

      <Background />
      <Navbar />
      {/* Middle Content */}
      <div className='px-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/events' element={<Events />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/sponsers' element={<Sponsers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
      
    </div>
  )
}

export default App
