import app from '../src/index.js';

const description = 'What is the result of the expression?';

const getCorrectAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getTaskArray = () => {
  const array = [];
  for (let i = 1; i <= 3; i += 1) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const correctAnswer = getCorrectAnswer(num1, num2, operator);
    array.push([`${num1}${operator}${num2}`, String(correctAnswer)]);
  }
  return array;
};

export default () => app(description, getTaskArray());
