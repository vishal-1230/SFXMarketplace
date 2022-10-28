import React from 'react'
import styles from './maincomponent.module.css'
import LeftSection from './MainComponent/LeftSection'
import Samples from './MainComponent/Samples'
import SamplePacks from './MainComponent/SamplePacks'
import Midis from './MainComponent/Midis'
import Content from './MainComponent/Content'
import { Link } from 'react-router-dom'

function MainComponent() {
  return (
    <div className={styles.main}>
      <div className={styles.categories}>
          <Link to='/' className={styles.a}><li id="0" className={styles.catItem}>Samples</li></Link>
          <Link to='/SamplePacks' className={styles.a}><li id="0" className={styles.catItem}>Sample Packs</li></Link>
          <Link to='/Midis' className={styles.a}><li id="0" className={styles.catItem}>MIDI Files</li></Link>
          <Link to='/' className={styles.a}><li id="0" className={styles.catItem}>One Shots</li></Link>
      </div>
      <div className={styles.content}>
        <LeftSection />
        <Content />        
      </div>
    </div>
  )
}

export default MainComponent