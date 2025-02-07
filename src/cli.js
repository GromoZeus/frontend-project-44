import readlineSync from 'readline-sync';

export const getQuestion = (question) => {
  const item = readlineSync.question(question).trim();
  if (item === '') {
    console.log('Please enter a valid value');
    return getQuestion(question);
  }
  return item;
};
