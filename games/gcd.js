import app from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (num1, num2) => {
  let numA = Math.max(num1, num2);
  let numB = Math.min(num1, num2);
  if (!numB) {
    return numA;
  }
  while (numB) {
    const division = numA % numB;
    if (division) {
      numA = numB;
      numB = division;
    } else {
      return numB;
    }
  }
  return numA;
};

const getTaskArray = () => {
  const array = [];
  for (let i = 1; i <= 3; i += 1) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const correctAnswer = getCorrectAnswer(num1, num2);
    array.push([`${num1} ${num2}`, String(correctAnswer)]);
  }
  return array;
};

export default () => app(description, getTaskArray());
