const enquirer = require('enquirer');
const moment = require('moment');

//Question to get the boundary date (how up to date would you like for your report to be?)
exports.boundaryDateQuestion = {
    type: 'select',
    name: 'boundaryDate',
    message: "Get Broken Links Data from Running Validator: ",
    choices: [{
        name: moment(),
        message: 'Now',
    }, {
        name: moment().subtract(7, 'days'),
        message: 'within past week',
    }, {
        name: moment().subtract(14, 'days'),
        message: 'within past two weeks',
    }, {
        name: moment().subtract(1, 'months'),
        message: 'within past month',
    }]
};

//Question to see if we want to run the tool for all sub accounts of a given account.
exports.subAccountsQuestion = {
    type: 'confirm',
    name: 'subAccount',
    message: "Would you like to run for all sub accounts: ",
    default: false,
};

//Function which asks the array of questions that are passed to it.
exports.askQuestions = function askQuestions(questions) {
    return new Promise((resolve, reject) => {
        enquirer.prompt(questions).then((answers) => {
            resolve(answers);
        }).catch((err) => console.log(err));
    });

}