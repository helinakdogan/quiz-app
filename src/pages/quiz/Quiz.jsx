import React, { useEffect, useState } from 'react'
import './Quiz.css'
import { useParams } from 'react-router-dom'
import * as api from '../../api/api'
import QuestionCard from '../../components/questionCard/QuestionCard'
import Modal from '../../components/modal/Modal'

// 1 -> get questions data using api
// 2 -> create UseState for score counter
// 3 -> create UseState for modal which will be final page 

const Quiz = () => {

  // 1. we need to show difficulty and which question user in. Instead using props, we used useParams func.
  const { difficulty, amount } = useParams()

  // 1. This is for displaying data which come with useEffect
  const [questionsData, setQuestionsData] = useState([])

  // 2. This will be score counter
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)

  //3. This will be use in Modal component. If true, go next page
  const [modal, setModal] = useState(false)

  // 1. First, we need to get all data by using fecthQuizData function which is defined in api, and by using useEffect. 
  //    Because questions should be shown when page is loaded.
  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    }
    getData();
  }, [])
  console.log(questionsData, "questionsData");



  return (
    <div className='quiz'>
      {
        modal ? <Modal score={score}/> :
          <QuestionCard
            questionsData={questionsData}
            score={score}
            setScore={setScore}
            count={count}
            setCount={setCount}
            modal={modal}
            setModal={setModal}
          />
      }

    </div>
  )
}

export default Quiz