const {Circle,Triangle,Square} = require('./shapes.js');

describe('Shapes',() => {
    describe('circle', () =>{
        it('should create a circle',() => {
            const newCircle = new Circle("aaa","white","blue" )
            expect(newCircle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">aaa</text>`)
        })
    })
})

describe('Shapes',() => {
    describe('scuare', () =>{
        it('should create a square',() => {
            const newSquare = new Circle("aaa","white","blue" )
            expect(newCircle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">aaa</text>`)
        })
    })
})