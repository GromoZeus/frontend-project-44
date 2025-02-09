import app from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const getTaskArray = () => {
  const array = [];
  for (let i = 1; i <= 3; i += 1) {
    const numRandom = Math.floor(Math.random() * 100);
    const correctAnswer = getCorrectAnswer(numRandom);
    array.push([numRandom, correctAnswer]);
  }
  return array;
};

export default () => {
  // const numRandom = Math.floor(Math.random() * 100);
  // const correctAnswer = getCorrectAnswer(numRandom);
  app(description, getTaskArray());
};
