import React, { useState } from 'react'
import './QuestionCard.css'

const QuestionCard = ({ questionsData, score, setScore, count, setCount, modal, setModal }) => {

    const [timer, setTimer] = useState(30);






    const approvedChoice = (e) => {
        //this will show which answer user chose
        console.log(e.currentTarget.value);

        //this will show if it users answer matches with true answer
        const checkAnswer = e.currentTarget.value == questionsData[count]?.correct_answer;
        console.log(checkAnswer);
    }


    return (
        <div className='questionCard'>


        <div className='questionCard-timer'>{timer}</div>


            {/* to show current count of question like 5/10 */}
            <div className='questionCard-title'> {count + 1} / 10 - {questionsData[count]?.question}</div>



            {/* 
            mapped answers to show them on screen
            everytime user clicks the button, this will be their answer
            */}
            {
                questionsData[count]?.answers?.map((answer, i) => (
                    <button onClick={approvedChoice} key={i} value={answer}>{answer}</button>
                ))
            }


        </div>
    )
}

export default QuestionCard