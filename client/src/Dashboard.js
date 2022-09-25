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
    // <BrowserRouter>
      <div className="dashboard">
        <Navbar />
        <MainComponent />
          {/* <Routes> */}
            {/* <Route exact path='/about' element={<About />} /> */}
            {/* <Route exact path='/downloads' element={<Downloads />} /> */}
            {/* <Route exact path='/signuplogin' element={<SignupLogin />} /> */}
            {/* <Route path='/' element={<MainComponent />} /> */}
          {/* </Routes> */}
        <Footer />
      </div>
    // </BrowserRouter>
)
}

export default Dashboard