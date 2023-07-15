const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');
const fs = require('fs');


const promptUser = () =>{
    inquirer
        .prompt([
            {
                type: 'input',
                name : "characters",
                message: "What text? Enter up to 3 characters.",
            },
            {
                type: 'input',
                name : "color",
                message: "What color?",
            },
            {
                type: 'list',
                name : "shape",
                message: (["Circle" , "Square" , "Triangle"]),
            },

        ])
        .then(res => {
            writeToFile(res)
        })
        
    };

    const init = () => {
        promptUser();
    
    }

    init();