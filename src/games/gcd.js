import app from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

// применим алгоритм Евклида
const getCorrectAnswer = (num1, num2) => {
  let numA = Math.max(num1, num2);
  let numB = Math.min(num1, num2);
  if (!numB) {
    return numA;
  }
  while (numB) {
    const rest = numA % numB;
    if (rest) {
      numA = numB;
      numB = rest;
    } else {
      return numB;
    }
  }
  return numA;
};

const getTask = () => {
  // генерация двух случайных чисел
  const numRnd1 = Math.floor(Math.random() * 100);
  const numRnd2 = Math.floor(Math.random() * 100);

  // находим правильный ответ
  const correctAnswer = String(getCorrectAnswer(numRnd1, numRnd2));

  // возвращаем вопрос и правильный ответ
  return [`${numRnd1} ${numRnd2}`, correctAnswer];
};

export default () => app(description, getTask);
