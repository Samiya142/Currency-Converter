#! /usr/bin/env node
import inquirer from "inquirer";
console.log("=".repeat(70));
console.log("\n\t Welcome to the currency convertor by Samiya. \n");
console.log("=".repeat(70));
// The list of currencies and their exchange rates.
const exchange_rate = {
    "USD": 1, //Base Currency (US Dollar)
    "EUR": 0.94, //European Currency (EURO)
    "JPY": 154.74, //Japanese Currency (YEN)
    "CNY": 7.24, //Chinese Currency (YUAN)
    "CAD": 1.37, //Canadian Currency (Canadian Dollar)
    "INR": 83.35, //Indian Currency (Indian Rupee)
    "MXN": 17.15, //Mexican Cuurency (Mexican Peso)
    "TRY": 32.52, //Turkish Currency (Turkish Lira)
    "PKR": 278.20 //Pakistani Currency (Pakistan Rupee)
};
// User select currency to convert from and to
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Please select the currency you want to convert from:",
        choices: ["USD", "EUR", "JPY", "CNY", "CAD", "INR", "MXN", "TRY", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Please select the currency you want to convert into:",
        choices: ["USD", "EUR", "JPY", "CNY", "CAD", "INR", "MXN", "TRY", "PKR"]
    },
    {
        name: "Amount",
        message: "Please enter the amount you want to convert:",
        type: "number"
    }
]);
let fromAmount = exchange_rate[userAnswer.from_currency];
let toAmount = exchange_rate[userAnswer.to_currency];
let amount = userAnswer.Amount;
//Convert the currency by using formula
let baseAmount = amount / fromAmount;
let conertedCurrency = baseAmount * toAmount;
//Print the converted currency
console.log(`Converted amount is ${conertedCurrency}`);
