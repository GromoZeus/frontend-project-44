import app from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTask = () => {
  // генерация случайного числа
  const numRnd = Math.floor(Math.random() * 100);

  // находим правильный ответ
  const correctAnswer = numRnd % 2 === 0 ? 'yes' : 'no';

  // возвращаем вопрос и правильный ответ
  return [numRnd, correctAnswer];
};

export default () => app(description, getTask);
