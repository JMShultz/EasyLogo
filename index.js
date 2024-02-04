const inquirer = require('inquirer');
const fs = require('fs');

const questions= require('./library/response.js');
const fileName="./examples/logo.svg";
const setShape =require('./library/SetShapes.js');


function createsvg(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}
function Createfile() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createsvg(response);
        })
    .catch(err => {
            console.log(err)
        }); 
}

Createfile();