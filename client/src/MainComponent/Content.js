import React from 'react'
import Samples from './Samples'
import SamplePacks from './SamplePacks'
import Midis from './Midis'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Content() {
  return (
        <Routes>
            <Route exact path='/' element={<Samples />} />
            <Route path='/Samples' element={<Samples />} />
            <Route path='/SamplePacks' element={<SamplePacks />} />
            <Route path='/Midis' element={<Midis />} />
        </Routes>
  )
}

export default Content