import React from 'react'
import styles from './Leftsection.module.css'
import {HiOutlineFilter} from 'react-icons/hi'

function LeftSection() {
  return (
    <div className={styles.leftSection}>
      <br />
        <h2><HiOutlineFilter id='filterLogo' />&nbsp;Filters</h2><br /><br />
        
        <div>
          <select name="category" id="" className="">
            <option value="Select Category">Select Category</option>
            <option value="cat1">Category 1</option>
            <option value="cat2">Category 2</option>
            <option value="cat3">Category 3</option>
          </select>
        </div><br />
        <div>
          <select name="genre" id="">
            <option value="Select Genre">Select Genre</option>
            <option value="genre1">Genre 1</option>
            <option value="genre2">Genre 2</option>
            <option value="genre3">Genre 3</option>
          </select>
        </div><br />
        <div>
          <select name="key" id="">
            <option value="Select Key">Select Key</option>
            <option value="cat1">Key 1</option>
            <option value="cat2">Key 2</option>
            <option value="cat3">Key 3</option>
          </select>
        </div><br />
        <div>
          <select name="bpm" id="">
            <option value="Select BPM">Select BPM</option>
            <option value="cat1">BPM 1</option>
            <option value="cat2">BPM 2</option>
            <option value="cat3">BPM 3</option>
          </select>
        </div>
        <br /><br />
    </div>
  )
}

export default LeftSection