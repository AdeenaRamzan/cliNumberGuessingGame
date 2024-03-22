#! /usr/bin/env node
import inquirer from "inquirer";
//Make computer to generate any random number
const randomNumber = Math.floor(Math.random() * 6 + 1);
//Taking input of user of guessed number
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess any number between 1-6: ",
    },
]);
//comparing both numbers
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number");
}
else {
    console.log("You guessed a wrong number");
}
