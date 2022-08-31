import React from 'react'

import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='navbarHeading'>SFX Marketplace</span>
          <div className="navMenu">
          <Link to='/home'><li className="navMenuItem">Home</li></Link>
          <Link to='/about'><li className="navMenuItem">About</li></Link>
          <Link to='/downloads'><li className="navMenuItem">Downloads</li></Link>
          <Link to='/signuplogin'><li className="navMenuItem"><button className="signinBtn">Sign In</button></li></Link>
        </div>
    </div>
  )
}

export default Navbar