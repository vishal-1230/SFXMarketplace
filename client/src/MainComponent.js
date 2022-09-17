import React from 'react'
import './maincomponent.css'
import LeftSection from './MainComponent/LeftSection'
import Cards from './MainComponent/Cards'

function MainComponent() {
  return (
    <div className="main">
      <div className="categories">
        {/* <ul className="catsList"> */}
          <li id="1" className='catItem'>Lorem</li>
          <li id="2" className='catItem'>Lorem ips</li>
          <li id="3" className='catItem'>Lorem, ipsum</li>
          <li id="4" className='catItem'>Lorem </li>
          <li id="5" className='catItem'>Ipsum</li>
          <li id="6" className='catItem'>Ipsum</li>
          <li id="7" className='catItem'>Ipsum</li>
        {/* </ul> */}
      </div>
      <div className="content">
        <LeftSection />
        <Cards />
      </div>
    </div>
  )
}

export default MainComponent