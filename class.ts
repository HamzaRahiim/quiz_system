// making an system to take quiz through cli using inquirer
import inquirer from "inquirer";
import chalk from "chalk";

interface answers {
  name: string;
  question1: string;
  question2: string;
}

const answers = {
  answer1: "Dhaka",
  answer2: "Canadian dollar",
};

// now we going to ask him two questions in typescript
const quiz2 = async () => {
  const { name, question1, question2 }: answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "list",
      name: "question1",
      message: chalk.blue("What is the capital of Bangladesh?"),
      choices: ["Dhaka", "Chittagong", "Khulna", "Rajshahi"],
    },
    {
      type: "list",
      name: "question2",
      message: chalk.green("What is the currency of Canada?"),
      choices: ["Canadian dollar", "Euro", "Pound", "Yen"],
    },
  ]);
  if (question1 === answers.answer1 && question2 === answers.answer2) {
    console.log(chalk.green(`You are correct! ${name}`));
  } else if (question1 !== answers.answer1 && question2 == answers.answer2) {
    console.log(`Your first answer is right only! ${name}`);
  } else if (question1 === answers.answer1 && question2 !== answers.answer2) {
    console.log(`Your second answer is right only! ${name}`);
  } else {
    console.log(chalk.red(`You are wrong! ${name}`));
  }
};
console.log(chalk.bgBlue("Welcome to the Quiz Game"));
quiz2();
