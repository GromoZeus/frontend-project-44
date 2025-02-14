import readlineSync from 'readline-sync';

// создаем функцию, которая приветствует пользователя и просит ввести имя
export const getUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ').trim();
  console.log(`Hello, ${name}!`);

  return name;
};

export default getUser;
