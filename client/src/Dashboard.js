import React from 'react'
import Navbar from './Navbar'
import MainComponent from './MainComponent.js'
import Footer from './Footer'

function Dashboard() {
  return (
    <div className="dashboard">
        <Navbar />
        <MainComponent />
        <Footer />
    </div>
)
}

export default Dashboard