import React from 'react'
import Home from '../Home/Home'
import Places from '../Places/Places'
import Videos from '../Videos/Videos'
import About from '../About/About'
import Contact from '../Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Faq from '../Faq/Faq'
import Place from '../Places/Place/Place'

const AnimatedRoutes = () => {
  return (

    <AnimatePresence>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/places' element={<Places />} />
        <Route path='/places/:id' element={<Place />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Faq' element={<Faq />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes