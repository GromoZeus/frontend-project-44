import readlineSync from 'readline-sync';

// создаем функцию, которая принимает вопрос и возвращает ответ
export const getQuestion = (question) => {
  const item = readlineSync.question(question).trim();
  if (item === '') {
    console.log('Please enter a valid value');
    return getQuestion(question);
  }
  return item;
};

// создаем функцию, которая приветствует пользователя и просит ввести имя
export const getUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = getQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export default getUser;
