import React from 'react';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Typed from 'react-typed'
import { motion } from 'framer-motion'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav className='sticky top-0 z-50 backdrop-blur-sm px-10 '>
          <ul className='flex justify-between p-4'>
            <div className='flex gap-4 font-Vida text-center items-center md:text-2xl'><li><Link to='/' ><Typed className=' select-none' strings={['UI DESIGNER', 'DEVELOPER', 'Phadtare Santosh']} showCursor={false} typeSpeed={20} backSpeed={10} ></Typed></Link></li>
              {/* <p className='font-Saira md:text-3xl'>UI DESIGNER,DEVELOPER</p> */}
            </div>
            <div className='md:flex gap-4 font-Yantra text-lg hidden'>
              <motion.li whileHover={{ scaleX: 1.3 }} className='hover:line-through hover:skew-y-3'><Link to='/' >home,</Link></motion.li>
              <motion.li whileHover={{ scaleX: 1.3 }} className='hover:line-through hover:skew-y-3'><Link to='/work' >work,</Link></motion.li>
              <motion.li whileHover={{ scaleX: 1.3 }} className='hover:line-through hover:skew-y-3'><Link to='/contact' >contact</Link></motion.li>
            </div>
          </ul>
          <hr className=' opacity-90 '></hr>
        </nav>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/work' exact element={<Work />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;