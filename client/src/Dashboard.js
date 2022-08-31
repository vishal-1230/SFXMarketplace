import React from 'react'
import Navbar from './Navbar'
import MainComponent from './MainComponent.js'
import Footer from './Footer.js'
import About from './About.js'
import Downloads from './Downloads.js'
import SignupLogin from './SignupLogin.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Dashboard() {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Navbar />
          <Routes>
            <Route exact path='/' element={<MainComponent />} />
            <Route path='/home' element={<MainComponent />} />
            <Route path='/about' element={<About />} />
            <Route path='/downloads' element={<Downloads />} />
            <Route path='/signuplogin' element={<SignupLogin />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
)
}

export default Dashboard