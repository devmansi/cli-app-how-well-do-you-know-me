const readlineSync = require('readline-sync');
const chalk = require('chalk');

const highestScore = {
    name : 'Sid',
    score: 5
};
const secondHighestScore = {
    name: 'Dan',
    score: 4
};
const player = readlineSync.question("Enter your name: ");


let score = 0;

console.log(`Welcome to the game ${player}. Let us see how well do you know me?`);
console.log("--------------------------");

function play (question, answer) {
  const providedAnswer = readlineSync.question(`${question} : `);

  console.log(`Answer provided by you: ${providedAnswer}`);

  if (providedAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log(`Current score is: ${chalk.green(score)}`);
  }
  else {
    console.log(`Current score is: ${chalk.red(score)}`);
  }

  console.log("---------\n");
}

const quesAndAns = [
    {
        question: "What is my name?",
        answer: 'Mansi',
    },
    {
        question: 'What do I like to eat?',
        answer: 'Pizza',
    },
    {
        question: "Which tv series I don't like?",
        answer: 'DoctorStrange',
    },
    {
        question: 'Do I like programming? ',
        answer : 'Yes',
    },
    {
        question: 'Do I like burger?',
        answer : 'No',
    }
];


quesAndAns.forEach((quesAnsPair) => {
    let { question, answer } = quesAnsPair;

    play(question, answer);
});

console.log(`You scored : ${chalk.yellow(score)}`);

console.log(chalk.green("......Scoreboard........"));
console.log(`${highestScore.name}-${highestScore.score}`);
console.log(`${secondHighestScore.name}-${secondHighestScore.score}`);