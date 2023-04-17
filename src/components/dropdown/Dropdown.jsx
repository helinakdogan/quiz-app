import React from 'react'
import './Dropdown.css'


// First it gets some data from Introduce page
const Dropdown = ({ data, setDifficultyChange }) => {
  return (
    <div className='dropdown'>
      {/* When user selects an option, it will become current option */}
      <select onChange={e => setDifficultyChange(e.target.value)}  name="" id="">
        {
          //to show array on screen
          data.map((dt, i) => (
            <option value={dt}> {dt} </option>
          ))
        }
      </select>
    </div>
  )
}

export default Dropdown