import React from 'react'
import './maincomponent.css'
import LeftSection from './MainComponent/LeftSection'
import Samples from './MainComponent/Samples'
import SamplePacks from './MainComponent/SamplePacks'
import Midis from './MainComponent/Midis'
import Content from './MainComponent/Content'
import { Link } from 'react-router-dom'

function MainComponent() {
  return (
    <div className="main">
      <div className="categories">
          <Link to='/' className='a'><li id="0" className="catItem">Samples</li></Link>
          <Link to='/SamplePacks' className='a'><li id="0" className="catItem">Sample Packs</li></Link>
          <Link to='/Midis' className='a'><li id="0" className="catItem">MIDI Files</li></Link>
          <Link to='/' className='a'><li id="0" className="catItem">One Shots</li></Link>
      </div>
      <div className="content">
        <LeftSection />
        <Content />        
      </div>
    </div>
  )
}

export default MainComponent