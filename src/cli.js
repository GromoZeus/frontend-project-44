import readlineSync from 'readline-sync';

export const getQuestion = (question) => {
  const item = readlineSync.question(question).trim();
  if (item === '') {
    console.log('Please enter a valid value');
    return getQuestion(question);
  }
  return item;
};

export const getUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = getQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export default getUser;
