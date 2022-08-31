import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='navbarHeading'>SFX<span>Marketplace</span></span>
          <div className="navMenu">
          <Link to='/home' className='a'><li className="navMenuItem">Home</li></Link>
          <Link to='/about' className='a'><li className="navMenuItem">About</li></Link>
          <Link to='/downloads' className='a'><li className="navMenuItem">Downloads</li></Link>
          <Link to='/signuplogin' className='a'><li className="navMenuItem"><button className="signinBtn">Sign In</button></li></Link>
        </div>
    </div>
  )
}

export default Navbar