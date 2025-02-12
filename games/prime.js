import app from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// проверка числа на простоту
const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// находим правильный ответ
const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const getTask = () => {
  // генерация случайного числа
  const numRnd = Math.floor(Math.random() * 100);

  // возвращаем вопрос и правильный ответ
  const correctAnswer = getCorrectAnswer(numRnd);
  return [numRnd, correctAnswer];
};

export default () => app(description, getTask);
