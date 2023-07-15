class Shape{
    constructor(color){
        
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(text,textColor,color){
        super(color);
        this.text = text;
        this.textColor = textColor;

    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    } 

}
class Triangle extends Shape {
    constructor(text,textColor,color){
        super(color);
        this.text = text;
        this.textColor = textColor;

    }
}
class Square extends Shape {
    constructor(text,textColor,color){
        super(color);
        this.text = text;
        this.textColor = textColor;

    }

}
module.exports={Circle,Square,Triangle}


