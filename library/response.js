
const colorKeywords= require('./ColorKeywords.js')

const Responses = [
    
     {
        name: 'shape',
        message: 'choose your shape for the logo',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    {
        name: 'shapeColorChoice',
        message: 'What is the color of your shape',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
  
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color",
        when: (answers) => {
            if(answers.shapeColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let Lowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (Lowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color")
        }
    },
   
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal",
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hex = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hex)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },

    
    {
        name: 'text',
        message: 'Enter in your text',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters");
            }
            return true;
        }
    },

    
    {
        name: 'textColorChoice',
        message: 'choose your text color ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
  
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color",
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let Lowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (Lowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color type")
        }
    },
    
    {
        type: "input",
        name: "textColor",
        message: "Enter the text hexadecimal number",
        when: (answers) => {
            if(answers.textColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hex = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hex)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
];
module.exports = Responses;

