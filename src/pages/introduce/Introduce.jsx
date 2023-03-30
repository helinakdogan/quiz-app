import React from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'

const Introduce = () => {

const difficulty = ["easy", "medium", "hard"];



  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img className="image" src="https://images.squarespace-cdn.com/content/v1/5402e23ce4b0a7034afad3a2/1556115865242-8PPL2J1DIGRL9ZRU8K9P/Quiz%2Btime%2Bgin%2Bfact%2Bfiction.png?format=2500w" alt="" width={600} />
      <Dropdown/>
      <div className='introduce-btn'>Quize başla</div>
      </div>
    </div>
  )
}

export default Introduce