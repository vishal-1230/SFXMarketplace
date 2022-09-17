import React from 'react'
import './Leftsecton.css'
// import {HiOutlineFilter} from 'react-icons/hi'

function LeftSection() {
  return (
    <div className="leftSection">
        <h2>Filters</h2><br />
        <div className="genreDiv">
            <span className="filterGenreTitle">Genre</span><br />
            {/* <input type="text"  className="genreInput" placeholder='Search Genre' /><br />
            <div className="genreDropdown">

            </div><br /> */}
            <div class="btn-group">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                  Clickable inside
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/">Menu item</a></li>
                <li><a class="dropdown-item" href="/">Menu item</a></li>
                <li><a class="dropdown-item" href="/">Menu item</a></li>
                {/* <li><a></a></li> */}
              </ul>
            </div>
        </div><br />
        <div className="keyDiv">
            <span className="filterKeyTitle">Key</span><br />
            <input type="text" placeholder='Search Key' className="keyInput" />
            <div className="keysDropdown">
            
            </div><br />
        </div>
        <div className="bpmDiv">
          <span className="bpmTitle">BPM / Tempo</span><br />
          <input type="text" placeholder='BPM or Tempo' className="bpmInput" id='bpmInput' /><br />
          <div className="bpmDropdown">

          </div><br />
        </div>
        <br />
    </div>
  )
}

export default LeftSection