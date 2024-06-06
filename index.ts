#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 3 + 1);

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 3);"
    },
]);
if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulations ! You guess a correct number.");
}
else{
    console.log("Sorry, you guess a wrong number");
}