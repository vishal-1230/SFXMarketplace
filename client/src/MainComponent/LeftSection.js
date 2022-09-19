import React from 'react'
import './Leftsecton.css'
import {HiOutlineFilter} from 'react-icons/hi'

function LeftSection() {
  return (
    <div className="leftSection">
      <br />
        <h2>Filters</h2><br />
        <div className="categoryDiv">
            <span className="filterCategoryTitle">Category</span><br />
            {/* <input type="text"  className="genreInput" placeholder='Search Genre' /><br />
            <div className="genreDropdown">

            </div><br /> */}
            <div class="btn-group">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                  Select Category
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Category 1</a></li>
                <li><a class="dropdown-item" href="#">Category 2</a></li>
                <li><a class="dropdown-item" href="#">Category 3</a></li>
                <li><a class="dropdown-item" href="#">Category 4</a></li>
              </ul>
            </div>
        </div><br />
        <div className="genreDiv">
            <span className="filterGenreTitle">Genre</span><br />
            {/* <input type="text"  className="genreInput" placeholder='Search Genre' /><br />
            <div className="genreDropdown">

            </div><br /> */}
            <div class="btn-group">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                  Select Genre
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Genre 1</a></li>
                <li><a class="dropdown-item" href="#">Genre 2</a></li>
                <li><a class="dropdown-item" href="#">Genre 3</a></li>
              </ul>
            </div>
        </div><br />
        <div className="keyDiv">
            <span className="filterKeyTitle">Key</span><br />
            <div class="btn-group">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                  Select Key
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Key 1</a></li>
                <li><a class="dropdown-item" href="#">Key 2</a></li>
                <li><a class="dropdown-item" href="#">Key 3</a></li>
                <li><a class="dropdown-item" href="#">Key 4</a></li>
              </ul>
            </div>
        </div><br />
        <div className="bpmDiv">
          <span className="bpmTitle">BPM / Tempo</span><br />
          <div class="btn-group">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                  Select BPM
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">BPM 1</a></li>
                <li><a class="dropdown-item" href="#">BPM 2</a></li>
                <li><a class="dropdown-item" href="#">BPM 3</a></li>
              </ul>
            </div>
        </div><br />
        <br /><br />
    </div>
  )
}

export default LeftSection