import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='navbarHeading'>SFX Marketplace</span>
          <div className="navMenu">
          <li className="navMenuItem">Home</li>
          <li className="navMenuItem">About</li>
          <li className="navMenuItem">Downloads</li>
        </div>
    </div>
  )
}

export default Navbar