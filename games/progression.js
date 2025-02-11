import app from '../src/index.js';

const description = 'What number is missing in the progression?';

const getCorrectAnswer = () => {
  const count = Math.floor(Math.random() * 10) + 5;
  const array = new Array(count).fill(null);
  const start = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 6) + 2;
  const hiddenElement = Math.floor(Math.random() * count);
  const progression = array.map((_, index) => start + index * step);
  const correctAnswer = progression[hiddenElement];
  progression[hiddenElement] = '..';
  return [progression.join(' '), String(correctAnswer)];
};

const getTaskArray = () => {
  const array = [];
  for (let i = 1; i <= 3; i += 1) {
    array.push(getCorrectAnswer());
  }
  return array;
};

export default () => app(description, getTaskArray());
