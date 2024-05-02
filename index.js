#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 280,
    RIYAL: 0.27,
    INR: 74.57,
    GBP: 0.76,
    MYR: 4.75,
    CNY: 7.23,
    HKD: 7.83,
    THB: 36.52,
    PHP: 56.59,
    AFG: 71.23,
    BTN: 83.17,
    BDT: 109.60,
    NPR: 133.08,
    LKR: 298.61,
};
let usr_ans = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "PKR", "RIYAL", "INR", "GBP", "MYR", "CNY", "HKD", "THB", "PHP", "AFG", "BTN", "BDT", "NPR", "LKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "PKR", "RIYAL", "INR", "GBP"]
    },
    {
        name: "amount",
        message: "Write the amount",
        type: "number",
    }
]);
let fromamount = currency[usr_ans.from]; // is say user jis currency ko convert karwana chahta hy wo millyga
let toamount = currency[usr_ans.to]; // is say user jis currency say convert krwana chata hy wo millyga
let amount = usr_ans.amount; // jo amount user put karyga wo print hoga
let baseamount = amount / fromamount; //is trhsn say hum user jo bh amount dayga usko dollar my convert kardayngay
let convertedamount = baseamount * toamount;
console.log(convertedamount);
