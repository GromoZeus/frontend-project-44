import * as cli from './cli.js';

export default (description, expressionAnswer) => {
  // выводим приветствие и описание игры
  const name = cli.getUser();
  console.log(description);

  // количество раундов
  const roundsCount = 3;

  // цколичество правильных ответов
  let correctAnswersCount = 0;

  // цикл игры
  for (let i = 0; i < roundsCount; i += 1) {
    // получаем вопрос и правильный ответ
    const [expression, correctAnswer] = expressionAnswer();

    // выводим вопрос и получаем ответ
    const answer = cli.getQuestion(`Question: ${expression}\nYour answer: `);

    // проверяем ответ
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      i = 3;
    }

    // выводим поздравление
    if (correctAnswersCount === roundsCount) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
