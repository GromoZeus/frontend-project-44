import { getQuestion, getUser } from './cli.js';

export default (description, expressionAnswer) => {
  const name = getUser();
  console.log(description); // описание
  const roundsCount = 3;
  let correctAnswersCount = 0;
  for (let i = 0; i < roundsCount; i += 1) {
    // const numRandom = Math.floor(Math.random() * 100); // контент
    // const question = `Question: ${expression}\nYour answer: `;
    const answer = getQuestion(`Question: ${expressionAnswer[i][0]}\nYour answer: `);
    // const correctAnswer = getCorrectAnswer(numRandom); // коректный ответ
    if (answer === expressionAnswer[i][1]) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expressionAnswer[i][1]}'.`);
      console.log(`Let's try again, ${name}!`);
      i = 3;
    }
    if (correctAnswersCount === roundsCount) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
