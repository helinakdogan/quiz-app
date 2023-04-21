
// 1 -> get correct and incorrect answers from url
// 2 -> shuffle them random


const shuffleArray = (array) => {
    // 2. Get arrays items seperately and sort them
    // 2. Put them in random order
    return [...array].sort(() => Math.random() - 0.5)
}


export const fetchQuizData = async (difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(url)).json();
    return data.results.map((dt) => ({
        // 1. First, get all responses
        ...dt,
        // 1. Second, get all incorrect answers and one correct answer but correct one shouldn't always be D. so that we use function
        answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])
    }))
}