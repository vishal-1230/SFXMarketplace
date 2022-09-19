import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>

        <span className='navbarHeading'>SFX<span className='navbarHeading2'>Marketplace</span></span>
          <div className="navMenu">
          <a to='/' className='a navLinks'><li className="navMenuItem">Home</li></a>
          <a to='/about' className='a navLinks'><li className="navMenuItem">About</li></a>
          <a to='/downloads' className='a navLinks'><li className="navMenuItem">Downloads</li></a>
          <a to='/signuplogin' className='a navLinks'><li className="navMenuItem"><button className="signinBtn">Sign In</button></li></a>
        </div>
    </div>
  )
}

export default Navbar