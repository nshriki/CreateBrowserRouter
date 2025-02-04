import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Help from './pages/Help'
import FAQ from './pages/FAQ'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />}>
          <Route path="faq" element={<FAQ />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
