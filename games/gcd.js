import app from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (num1, num2) => {
  if (!num1) {
    return num2;
  } if (!num2) {
    return num1;
  }
  let numA = Math.max(num1, num2);
  let numB = Math.min(num1, num2);
  while (numB) {
    const division = numA % numB;
    if (division) {
      numA = numB;
      numB = division;
    }
  }
  return numB;
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
