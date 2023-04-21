import React, { useState } from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'


// 1 -> keeping difficulty levels in array and sending it to Dropdown

// 2 -> to go Quiz page after choosing difficulty level


const Introduce = () => {

  // 1. We keep all difficulty levels in an array 
  const difficulty = ["easy", "medium", "hard"];

  // 1. This will use when user change the value of difficulty
  const [difficultyChange, setDifficultyChange] = useState('');

  // 2. To direct quiz page, first we need to define a navigate function and total number of questions
  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10;

  // 1. This is for checking on console if current difficulty level really changes when user choose different one
  console.log(difficultyChange, "difficultyChange");

  const startQuiz = () => {
    // 2. User has to choose a difficulty level and then click the start button because difficulty's first value is empty
    if (difficultyChange) (
      // 2. This is the url it will go, which is the second path in app.js
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
    )
  }

  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img className="image" src="https://images.squarespace-cdn.com/content/v1/5402e23ce4b0a7034afad3a2/1556115865242-8PPL2J1DIGRL9ZRU8K9P/Quiz%2Btime%2Bgin%2Bfact%2Bfiction.png?format=2500w" alt="" width={650} />
        <div className='difficulty-container'>
          <div className='level'>Choose a difficulty level</div>
          {/* 1. Dropdown from components will be use here. To be used properly, we should send these parameters as props */}
          <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        </div>
        {/* 2. When user clicks start button, it should go Quiz page. */}
        <div onClick={startQuiz} className='introduce-btn'>Start!</div>
      </div>
    </div>
  )
}

export default Introduce