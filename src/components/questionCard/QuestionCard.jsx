import React, { useEffect, useState } from 'react'
import './QuestionCard.css'

// 1 -> get questions
// 2 -> increase score according to correct answers
// 3 -> count number of question
// 4 -> add timer




const QuestionCard = ({ questionsData, score, setScore, count, setCount, modal, setModal }) => {

    const [timer, setTimer] = useState(30);

    const approvedChoice = (e) => {
        //this will show which answer user chose
        console.log(e.currentTarget.value);

        //this will show if it users answer matches with true answer
        const checkAnswer = e.currentTarget.value == questionsData[count]?.correct_answer;
        console.log(checkAnswer);

        if (checkAnswer) {
            setScore(score + 10)
        }
        setCount(count + 1)
        if (count == 9) setModal(true)  //this will render a different page
        setTimer(30);
    }

    // 4.
    useEffect(() => {
        //callback
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
            if (timer == 0 && count < 10) {
                setCount(count + 1);
                setTimer(30);
            } else if (count >= 10) {
                setModal(true);
            }
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [timer])


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