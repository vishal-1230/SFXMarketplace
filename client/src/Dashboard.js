import React from 'react'
import Navbar from './Navbar'
import MainComponent from './MainComponent.js'
import Footer from './Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Dashboard() {
  return (
    <div className="dashboard">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<MainComponent />} />
            <Route path='/home' element={<MainComponent />} />
            <Route path='/about' element={<About />} />
            <Route path='/downloads' element={<Downloads />} />
            <Route path='/signuplogin' element={<SignupLogin />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
)
}

export default Dashboard