import app from '../index.js';

const description = 'What is the result of the expression?';

// вычисление результата выражения
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

const getTask = () => {
  // генерация двух случайных чисел и оператора
  const numRnd1 = Math.floor(Math.random() * 100);
  const numRnd2 = Math.floor(Math.random() * 100);
  const operators = ['+', '-', '*'];
  const operRnd = operators[Math.floor(Math.random() * operators.length)];

  // находим правильный ответ
  const correctAnswer = String(getCorrectAnswer(numRnd1, numRnd2, operRnd));

  // возвращаем вопрос и правильный ответ
  return [`${numRnd1} ${operRnd} ${numRnd2}`, correctAnswer];
};

export default () => app(description, getTask);
