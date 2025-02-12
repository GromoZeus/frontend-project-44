import app from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const getTaskArray = () => {
  const array = [];
  for (let i = 1; i <= 3; i += 1) {
    const numRandom = Math.floor(Math.random() * 100);
    const correctAnswer = getCorrectAnswer(numRandom);
    array.push([numRandom, correctAnswer]);
  }
  return array;
};

export default () => app(description, getTaskArray());
