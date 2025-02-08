#!/usr/bin/env node
import { getQuestion, getUser } from '../src/cli.js';

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const name = getUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const roundsCount = 3;
let correctAnswersCount = 0;
for (let i = 1; i <= roundsCount; i += 1) {
  const numRandom = Math.floor(Math.random() * 100);
  const question = `Question: ${numRandom}\nYour answer: `;
  const answer = getQuestion(question);
  const correctAnswer = getCorrectAnswer(numRandom);
  if (answer === correctAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    i = 3;
  }
  if (correctAnswersCount === roundsCount) {
    console.log(`Congratulations, ${name}!`);
  }
}
