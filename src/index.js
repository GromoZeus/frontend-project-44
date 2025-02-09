import { getQuestion, getUser } from './cli.js';

export default (description, expressionAnswer) => {
  const name = getUser();
  console.log(description);
  const roundsCount = 3;
  let correctAnswersCount = 0;
  for (let i = 0; i < roundsCount; i += 1) {
    const [expression, correctAnswer] = expressionAnswer[i];
    const answer = getQuestion(`Question: ${expression}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      i = 3;
    }
    if (correctAnswersCount === roundsCount) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
