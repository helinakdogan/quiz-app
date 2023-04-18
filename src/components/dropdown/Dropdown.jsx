import React from 'react'
import './Dropdown.css'


// First it gets some data from Introduce page
const Dropdown = ({ data, setDifficultyChange }) => {
  return (
    <div className='dropdown'>
      {/* When user selects an option, it will become currently selected */}
      <select onChange={e => setDifficultyChange(e.target.value)}  name="" id="">
        {
          // mapping data array to display all elements of array on screen, each of them will be an option
          data.map((dt, i) => (
            <option value={dt}> {dt} </option>
          ))
        }
      </select>
    </div>
  )
}

export default Dropdown