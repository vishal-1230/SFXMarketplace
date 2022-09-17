import React from 'react'
import './Leftsecton.css'
import {HiOutlineFilter} from 'react-icons/hi'

function LeftSection() {
  return (
    <div className="leftSection">
        <h2>Filters</h2><br />
        <div className="categoryDiv">
            <span className="filterCategoryTitle">Category</span><br />
            <input type="text"  className="categoryInput" placeholder='Search Category' /><br />
            <div className="categoriesDropdown">

            </div><br />
        </div>
        <div className="keyDiv">
            <span className="filterKeyTitle">Key</span><br />
            <input type="text" placeholder='Search Key' className="keyInput" />
            <div className="keysDropdown">
            
            </div><br />
        </div>
        <div className="bpmDiv">

        </div>
    </div>
  )
}

export default LeftSection