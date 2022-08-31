import React from 'react'
import './maincomponent.css'
import LeftSection from './MainComponent/LeftSection'
import Cards from './MainComponent/Cards'

function MainComponent() {
  return (
    <div className="main">
      <LeftSection />
      <Cards />
    </div>
  )
}

export default MainComponent