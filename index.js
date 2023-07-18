const inquirer = require('inquirer');
const {Circle,Triangle,Square} = require('./lib/shapes.js'); //object deconstructing
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
                message:"What shape do you want?",
                choices: (["Circle" , "Square" , "Triangle"]),
            },
            {
                type:'input',
                name:"textColor",
                message:"text color?",
            }

        ])
        .then(res => {
            let shape 
            if(res.shape==="Circle"){
                shape = new Circle(res.characters,res.textColor,res.color)

            }else if(res.shape==="Square"){
                    shape = new Square(res.characters,res.textColor,res.color)
                
            }else
                if(res.shape==="Triangle"){
                    shape = new Triangle(res.characters,res.textColor,res.color)
            }
            console.log(shape);
            console.log(shape.render)
            fs.writeFileSync("./examples/logo.svg",shape.render())
        
        })
        
    };

    const init = () => {
        promptUser();
    
    }

    init();