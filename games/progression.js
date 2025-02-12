import app from '../src/index.js';

const description = 'What number is missing in the progression?';

const getTask = () => {
  // генерация случайной арифметической прогрессии
  const count = Math.floor(Math.random() * 10) + 5;
  const array = new Array(count).fill(null);
  const start = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 6) + 2;
  const hiddenElement = Math.floor(Math.random() * count); // выбор случайного элемента для скрытия
  const progression = array.map((_, index) => start + index * step);

  // находим правильный ответ и прячем его
  const correctAnswer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';

  // возвращаем вопрос и правильный ответ
  return [progression.join(' '), correctAnswer];
};

export default () => app(description, getTask);
