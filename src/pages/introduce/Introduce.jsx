import React, { useState } from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'

const Introduce = () => {

  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState('');


  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img className="image" src="https://images.squarespace-cdn.com/content/v1/5402e23ce4b0a7034afad3a2/1556115865242-8PPL2J1DIGRL9ZRU8K9P/Quiz%2Btime%2Bgin%2Bfact%2Bfiction.png?format=2500w" alt="" width={650} />
        
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
        <div className='introduce-btn'>Start!</div>
      </div>
    </div>
  )
}

export default Introduce