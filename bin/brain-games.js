#!/usr/bin/env node
import { getQuestion } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getQuestion('May I have your name? ');
console.log(`Hello, ${name}!`);
