import React from 'react'
import Navbar from './Navbar'
import MainComponent from './MainComponent.js'

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