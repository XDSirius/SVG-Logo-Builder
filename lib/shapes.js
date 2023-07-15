class Shape{
    constructor(text,color){
        this.text = text;
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(text,color,shape){
        super(text,color);
        this.shape = shape;
    }

}
class Triangle extends Shape {
    constructor(text,color,shape){
        super(text,color);
        this.shape = shape;
    }

}
class Square extends Shape {
    constructor(text,color,shape){
        super(text,color);
        this.shape = shape;
    }

}



