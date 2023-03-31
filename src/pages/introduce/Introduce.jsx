import React, { useState } from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import {useNavigate} from 'react-router-dom'


const Introduce = () => {

  //difficulty options
  const difficulty = ["easy", "medium", "hard"];

  //for props
  const [difficultyChange, setDifficultyChange] = useState('');
  
  //to direct quiz page
  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10;



  console.log(difficultyChange, "difficultyChange");
  
  const startQuiz = () => {
    //if user choose the difficulty level and click the start button
    if(difficultyChange)(
      //go this url
      //this is the second path in app.js
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
    )
  }
  
  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img className="image" src="https://images.squarespace-cdn.com/content/v1/5402e23ce4b0a7034afad3a2/1556115865242-8PPL2J1DIGRL9ZRU8K9P/Quiz%2Btime%2Bgin%2Bfact%2Bfiction.png?format=2500w" alt="" width={650} />
        
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
        
        <div onClick={startQuiz} className='introduce-btn'>Start!</div>
      </div>
    </div>
  )
}

export default Introduce