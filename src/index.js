import readlineSync from 'readline-sync';
import getUser from './cli.js';

// создаем функцию, которая принимает вопрос и возвращает ответ
export const getQuestion = (question) => {
  const item = readlineSync.question(question).trim();
  if (item === '') {
    console.log('Please enter a valid value');
    return getQuestion(question);
  }
  return item;
};

export default (description, expressionAnswer) => {
  // выводим приветствие и описание игры
  const name = getUser();
  console.log(description);

  // количество раундов
  const roundsCount = 3;

  // цикл игры
  for (let i = 1; i <= roundsCount; i += 1) {
    // получаем вопрос и правильный ответ
    const [expression, correctAnswer] = expressionAnswer();

    // выводим вопрос и получаем ответ
    const answer = getQuestion(`Question: ${expression}\nYour answer: `);

    // проверяем ответ
    if (answer === correctAnswer) {
      console.log('Correct!');

      // выводим поздравление, если игрок угадал все ответы
      if (i === roundsCount) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      i = 3;
    }
  }
};
