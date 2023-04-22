import React, { useEffect, useState } from 'react'
import './QuestionCard.css'

// 1 -> for user selecting an answer
// 2 -> increase score according to correct answers
// 3 -> count number of question
// 4 -> add timer
// 5 -> to go modal



const QuestionCard = ({ questionsData, score, setScore, count, setCount, modal, setModal }) => {

    // 4. First value of timer will be 30
    const [timer, setTimer] = useState(30);

    
    const approvedChoice = (e) => {
        // 1. This will show which answer user chose on console
        console.log(e.currentTarget.value);

        // 1. This will show if users answer matches with correct answer and return boolean
        const checkAnswer = e.currentTarget.value == questionsData[count]?.correct_answer;
        console.log(checkAnswer);

        // 1. If answer is correct
        if (checkAnswer) {
            // 2. This will increase total score
            setScore(score + 10)
        }

        // 3. After clicking, number of question will increase 1
        setCount(count + 1)

        // 5. After last question, it will render modal page
        if (count == 9) setModal(true)  

        // 4. After each question timer will reset and start with 30 again
        setTimer(30);
    }



    // 4. When page is loaded, timer will start decreasing
    useEffect(() => {
        // callback
        const interval = setInterval(() => {
            if (timer > 0) {
                // 4. It will decrease till zero
                setTimer(timer - 1);
            }

            if (timer == 0 && count < 10) {
                // 3. If time is up, increase count 1 because it will go next question
                setCount(count + 1);
                // 4. Reset timer
                setTimer(30);

            } else if (count >= 10) {
                // 5. After last question, don't show timer
                setModal(true);
            }
        }, 1000)

        return () => {
            // 4. This is important for counting properly
            clearInterval(interval);
        }
    }, [timer])



    return (
        <div className='questionCard'>

            {/* 4. Timer will be shown on screen */}
            <div className='questionCard-timer'>{timer}</div>

            {/* 3. To show current count of question like 5/10 */}
            <div className='questionCard-title'> {count + 1} / 10 - {questionsData[count]?.question}</div>

            {/* 1. Mapping answers to show them on screen. 
                   Everytime user clicks the button, this will be their answer and approvedChoice will run*/}
            {
                questionsData[count]?.answers?.map((answer, i) => (
                    <button onClick={approvedChoice} key={i} value={answer}>{answer}</button>
                ))
            }
        </div>
    )
}

export default QuestionCard