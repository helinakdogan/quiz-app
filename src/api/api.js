
const shuffleArray = (array) => {
    //get arrays items seperately and sort them
    //put them in random order
    return [...array].sort(() => Math.random() - 0.5)
}


export const fetchQuizData = async (difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(url)).json();
    return data.results.map((dt) => ({

        //get all responses
        ...dt,
        //get all incorrect answers and one correct answer but correct one shouldn't always be D. so that we use function
        answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])
    }))
}